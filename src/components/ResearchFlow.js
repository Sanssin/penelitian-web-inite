import React, { useState } from 'react';
import { Container, Row, Col, Card, Button, Alert, ProgressBar } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';

const ResearchFlow = () => {
  const [currentStep, setCurrentStep] = useState(1);
  const [completedSteps, setCompletedSteps] = useState([]);
  const navigate = useNavigate();

  const steps = [
    {
      id: 1,
      title: "Pre-Test",
      description: "Isi kuesioner untuk mengukur pengetahuan awal Anda",
      icon: "bi-clipboard-check",
      action: "Isi Pre-Test",
      url: process.env.REACT_APP_PRETEST_URL || "https://forms.gle/yZXzSFipxhP9JJd47",
      duration: "~5 menit"
    },
    {
      id: 2,
      title: "Simulasi INITE",
      description: "Gunakan simulasi untuk mempelajari teknologi nuklir",
      icon: "bi-controller",
      action: "Buka Simulasi",
      url: process.env.REACT_APP_SIMULATION_URL || "https://inite-polteknuklir.site",
      duration: "~10-15 menit",
      deviceRecommendation: "💻 Disarankan menggunakan laptop/desktop untuk pengalaman terbaik"
    },
    {
      id: 3,
      title: "Post-Test",
      description: "Lengkapi kuesioner untuk mengukur peningkatan pemahaman",
      icon: "bi-clipboard-data",
      action: "Isi Post-Test",
      url: process.env.REACT_APP_POSTTEST_URL || "https://forms.gle/NbYR31RSthsyqPsGA",
      duration: "~5 menit"
    }
  ];

  const handleStepComplete = (stepId) => {
    if (!completedSteps.includes(stepId)) {
      setCompletedSteps([...completedSteps, stepId]);
      
      // Move to next step
      if (stepId < steps.length) {
        setCurrentStep(stepId + 1);
      } else {
        // All steps completed, redirect to thank you page
        setTimeout(() => {
          navigate('/thank-you');
        }, 2000);
      }
    }
  };

  const handleStepClick = (url, stepId) => {
    // Open the link in a new tab
    window.open(url, '_blank');
    
    // Mark step as completed after a short delay (assuming user will complete it)
    // In a real application, you might want to track completion more precisely
    setTimeout(() => {
      handleStepComplete(stepId);
    }, 3000);
  };

  const progress = (completedSteps.length / steps.length) * 100;

  return (
    <div style={{minHeight: '100vh', background: 'var(--bg-light)', paddingTop: '2rem'}}>
      <Container>
        {/* Header */}
        <Row className="text-center mb-5">
          <Col lg={8} className="mx-auto">
            <h1 className="display-4 mb-3" style={{color: 'var(--primary-color)'}}>Alur Penelitian</h1>
            <p className="lead text-muted mb-4">
              Ikuti langkah-langkah berikut untuk menyelesaikan penelitian
            </p>
            
            {/* Progress Bar */}
            <div className="mb-4">
              <div className="d-flex justify-content-between align-items-center mb-2">
                <small className="text-muted">Progress Penelitian</small>
                <small className="text-muted">{completedSteps.length}/{steps.length} selesai</small>
              </div>
              <ProgressBar 
                now={progress} 
                style={{height: '10px'}}
                variant={progress === 100 ? 'success' : 'primary'}
              />
            </div>
          </Col>
        </Row>

        {/* Steps */}
        <Row className="justify-content-center">
          {steps.map((step, index) => (
            <Col lg={4} md={6} className="mb-4" key={step.id}>
              <Card 
                className={`h-100 border-0 shadow-sm ${
                  completedSteps.includes(step.id) ? 'border-success' : 
                  currentStep === step.id ? 'border-primary' : ''
                }`}
                style={{
                  transform: currentStep === step.id ? 'scale(1.02)' : 'scale(1)',
                  transition: 'all 0.3s ease'
                }}
              >
                <Card.Body className="text-center p-4">
                  {/* Step Number and Status */}
                  <div className="position-relative mb-3">
                    <div 
                      className={`rounded-circle d-flex align-items-center justify-content-center mx-auto mb-3 ${
                        completedSteps.includes(step.id) 
                          ? 'bg-success' 
                          : currentStep === step.id 
                            ? 'bg-primary' 
                            : 'bg-secondary'
                      }`}
                      style={{width: '60px', height: '60px'}}
                    >
                      {completedSteps.includes(step.id) ? (
                        <i className="bi bi-check-lg text-white fs-3"></i>
                      ) : (
                        <span className="text-white fw-bold fs-4">{step.id}</span>
                      )}
                    </div>
                    
                    {completedSteps.includes(step.id) && (
                      <div className="position-absolute top-0 end-0">
                        <i className="bi bi-patch-check-fill text-success fs-4"></i>
                      </div>
                    )}
                  </div>

                  {/* Step Icon */}
                  <div className="mb-3">
                    <i className={`${step.icon} fs-1`} style={{color: 'var(--primary-color)'}}></i>
                  </div>

                  {/* Step Content */}
                  <h4 className="mb-3">{step.title}</h4>
                  <p className="text-muted mb-3">{step.description}</p>
                  
                  <div className="mb-3">
                    <small className="text-muted">
                      <i className="bi bi-clock me-1"></i>
                      Estimasi waktu: {step.duration}
                    </small>
                  </div>

                  {/* Device Recommendation for Simulation */}
                  {step.deviceRecommendation && (
                    <div className="mb-3">
                      <Alert variant="warning" className="py-2 px-3 mb-0">
                        <small>{step.deviceRecommendation}</small>
                      </Alert>
                    </div>
                  )}

                  {/* Action Button */}
                  <Button
                    variant={completedSteps.includes(step.id) ? "success" : "primary"}
                    size="lg"
                    className="w-100"
                    disabled={currentStep !== step.id && !completedSteps.includes(step.id)}
                    onClick={() => handleStepClick(step.url, step.id)}
                  >
                    {completedSteps.includes(step.id) ? (
                      <>
                        <i className="bi bi-check-circle me-2"></i>
                        Selesai
                      </>
                    ) : currentStep === step.id ? (
                      <>
                        <i className="bi bi-play-circle me-2"></i>
                        {step.action}
                      </>
                    ) : (
                      <>
                        <i className="bi bi-lock me-2"></i>
                        Menunggu
                      </>
                    )}
                  </Button>
                </Card.Body>
              </Card>
              
              {/* Connector Arrow */}
              {index < steps.length - 1 && (
                <div className="text-center my-3 d-none d-lg-block">
                  <i className="bi bi-arrow-down fs-2 text-muted"></i>
                </div>
              )}
            </Col>
          ))}
        </Row>

        {/* Instructions */}
        <Row className="justify-content-center mt-5">
          <Col lg={8}>
            <Alert variant="info" className="text-center">
              <i className="bi bi-info-circle me-2"></i>
              <strong>Petunjuk:</strong> Klik tombol pada setiap langkah untuk membuka link yang diperlukan. 
              Pastikan Anda menyelesaikan setiap langkah sebelum melanjutkan ke langkah berikutnya.
            </Alert>
            
            {/* Device Recommendation Alert */}
            <Alert variant="warning" className="text-center mt-3">
              <i className="bi bi-laptop me-2"></i>
              <strong>Rekomendasi:</strong> Untuk pengalaman simulasi yang optimal, 
              sangat disarankan menggunakan laptop atau komputer desktop dengan layar yang lebih besar.
            </Alert>
          </Col>
        </Row>

        {/* Completion Message */}
        {completedSteps.length === steps.length && (
          <Row className="justify-content-center mt-4">
            <Col lg={8}>
              <Alert variant="success" className="text-center">
                <i className="bi bi-trophy me-2"></i>
                <strong>Selamat!</strong> Anda telah menyelesaikan semua langkah penelitian. 
                Terima kasih atas partisipasi Anda!
              </Alert>
            </Col>
          </Row>
        )}

        {/* Back Button */}
        <Row className="justify-content-center mt-4 mb-5">
          <Col lg={8} className="text-center">
            <Button 
              variant="outline-secondary" 
              onClick={() => navigate('/')}
              className="me-3"
            >
              <i className="bi bi-arrow-left me-2"></i>
              Kembali ke Beranda
            </Button>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default ResearchFlow;