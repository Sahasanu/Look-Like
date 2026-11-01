import React, { useState, useEffect } from 'react';
import { PageLayout } from './components/layout/PageLayout';
import { Home } from './pages/Home/Home';
import { ServicesPage } from './pages/ServicePage/ServicesPage';
import { InspirationPage } from './pages/InspirationPage';
import { Toast } from './components/ui/Toast';
import { Modal } from './components/common/Modal';
import { BookingForm } from './pages/Home/sections/booking/BookingForm';
import { ManagementPanelModal } from './components/admin/ManagementPanelModal';

export function App() {
  const [toast, setToast] = useState({ message: '', type: 'info' });
  const [isBookingModalOpen, setIsBookingModalOpen] = useState(false);
  const [isManagementOpen, setIsManagementOpen] = useState(false);
  const [preselectedBooking, setPreselectedBooking] = useState(null);
  const [currentPage, setCurrentPage] = useState(() => {
    const hash = window.location.hash.toLowerCase();
    if (hash === '#services' || hash === '#/services' || hash.startsWith('#category-')) {
      return 'services';
    }
    if (hash === '#inspiration' || hash === '#/inspiration' || hash === '#lookbook') {
      return 'inspiration';
    }
    return 'home';
  });

  // Listen to browser URL hash changes for native back/forward support
  useEffect(() => {
    const handleHashChange = () => {
      const hash = window.location.hash.toLowerCase();
      if (hash === '#manage' || hash === '#admin') {
        setIsManagementOpen(true);
      } else if (hash === '#services' || hash === '#/services' || hash.startsWith('#category-')) {
        setCurrentPage('services');
      } else if (hash === '#inspiration' || hash === '#/inspiration' || hash === '#lookbook') {
        setCurrentPage('inspiration');
      } else if (hash === '#home' || hash === '#' || hash === '') {
        setCurrentPage('home');
      }
    };

    // Check on initial mount
    const initialHash = window.location.hash.toLowerCase();
    if (initialHash === '#manage' || initialHash === '#admin') {
      setIsManagementOpen(true);
    }

    window.addEventListener('hashchange', handleHashChange);
    return () => window.removeEventListener('hashchange', handleHashChange);
  }, []);

  const navigate = (page) => {
    setCurrentPage(page);
    if (page === 'services') {
      window.location.hash = '#services';
    } else if (page === 'inspiration') {
      window.location.hash = '#inspiration';
    } else {
      window.location.hash = '#';
    }
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const notify = (message, type = 'info') => {
    setToast({ message, type });
  };

  const handleOpenBooking = (preselected) => {
    setPreselectedBooking(preselected || null);
    setIsBookingModalOpen(true);
  };

  const handleCloseBooking = () => {
    setIsBookingModalOpen(false);
  };

  return (
    <>
      <PageLayout
        currentPage={currentPage}
        onNavigate={navigate}
        onNotify={notify}
        onOpenBooking={handleOpenBooking}
        onOpenManagement={() => setIsManagementOpen(true)}
      >
        {currentPage === 'services' ? (
          <ServicesPage
            onNavigate={navigate}
            onNotify={notify}
            onOpenBooking={handleOpenBooking}
          />
        ) : currentPage === 'inspiration' ? (
          <InspirationPage
            onNavigate={navigate}
            onNotify={notify}
            onOpenBooking={handleOpenBooking}
            onOpenManagement={() => setIsManagementOpen(true)}
          />
        ) : (
          <Home
            onNavigate={navigate}
            onNotify={notify}
            onOpenBooking={handleOpenBooking}
          />
        )}

        <Toast
          message={toast.message}
          type={toast.type}
          onClose={() => setToast({ message: '', type: 'info' })}
        />
      </PageLayout>

      {/* Booking Appointment Modal Popup */}
      <Modal
        isOpen={isBookingModalOpen}
        onClose={handleCloseBooking}
        title="Reserve Your Chair"
        maxWidth="max-w-3xl"
      >
        <BookingForm
          preselectedCategory={preselectedBooking}
          onNotify={notify}
          onClose={handleCloseBooking}
        />
      </Modal>

      {/* Content Management Panel Modal */}
      <ManagementPanelModal
        isOpen={isManagementOpen}
        onClose={() => {
          setIsManagementOpen(false);
          if (window.location.hash === '#manage' || window.location.hash === '#admin') {
            window.location.hash = '#';
          }
        }}
        onNotify={notify}
      />
    </>
  );
}

export default App;
