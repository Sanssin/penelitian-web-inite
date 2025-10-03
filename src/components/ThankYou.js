import React from 'react';
import { Container, Row, Col, Button, Card } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import logoInite from '../assets/logo_inite.png';
import maskot2 from '../assets/maskot2.png';

const ThankYou = () => {
  return (
    <div style={{
      minHeight: '100vh', 
      background: 'var(--nuclear-gradient)',
      display: 'flex',
      alignItems: 'center'
    }}>
      <Container>
        <Row className="justify-content-center">
          <Col lg={8} xl={6}>
            <Card className="border-0 shadow-lg" style={{borderRadius: '20px'}}>
              <Card.Body className="p-5 text-center">
                {/* Logo */}
                <img src={logoInite} alt="INITE Logo" className="mb-4" style={{maxWidth: '120px'}} />
                
                {/* Success Icon */}
                <div className="mb-4">
                  <div 
                    className="rounded-circle bg-success d-flex align-items-center justify-content-center mx-auto mb-3"
                    style={{width: '100px', height: '100px'}}
                  >
                    <i className="bi bi-check-lg text-white" style={{fontSize: '3rem'}}></i>
                  </div>
                </div>

                {/* Thank You Message */}
                <h1 className="display-4 mb-3" style={{color: 'var(--primary-color)'}}>
                  Terima Kasih!
                </h1>
                
                <h4 className="text-muted mb-4">
                  Penelitian Berhasil Diselesaikan
                </h4>

                <p className="lead mb-4">
                  Terima kasih telah berpartisipasi dalam penelitian tentang efektivitas 
                  simulasi INITE dalam pembelajaran teknologi nuklir dan keselamatan radiasi.
                </p>

                {/* Mascot */}
                <div className="mb-4">
                  <img src={maskot2} alt="Maskot INITE" className="img-fluid" style={{maxWidth: '200px'}} />
                </div>

                {/* Contribution Message */}
                <Card className="bg-light border-0 mb-4">
                  <Card.Body>
                    <h5 className="mb-3">
                      <i className="bi bi-heart-fill text-danger me-2"></i>
                      Kontribusi Anda Sangat Berharga
                    </h5>
                    <p className="mb-0 text-muted">
                      Data yang Anda berikan akan membantu pengembangan metode pembelajaran 
                      teknologi nuklir yang lebih efektif untuk generasi mendatang.
                    </p>
                  </Card.Body>
                </Card>

                {/* Research Impact */}
                <div className="text-start mb-4">
                  <h6 className="mb-3">Data Anda akan digunakan untuk:</h6>
                  <div className="row">
                    <div className="col-6">
                      <div className="d-flex align-items-center mb-2">
                        <i className="bi bi-check-circle-fill text-success me-2"></i>
                        <small>Analisis efektivitas simulasi</small>
                      </div>
                      <div className="d-flex align-items-center mb-2">
                        <i className="bi bi-check-circle-fill text-success me-2"></i>
                        <small>Pengembangan kurikulum</small>
                      </div>
                    </div>
                    <div className="col-6">
                      <div className="d-flex align-items-center mb-2">
                        <i className="bi bi-check-circle-fill text-success me-2"></i>
                        <small>Penelitian akademik</small>
                      </div>
                      <div className="d-flex align-items-center mb-2">
                        <i className="bi bi-check-circle-fill text-success me-2"></i>
                        <small>Publikasi ilmiah</small>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Contact Information */}
                <Card className="bg-primary text-white border-0 mb-4">
                  <Card.Body>
                    <h6 className="mb-3">
                      <i className="bi bi-envelope me-2"></i>
                      Pertanyaan atau Saran?
                    </h6>
                    <p className="mb-2">
                      <small>
                        Jika Anda memiliki pertanyaan tentang penelitian ini atau ingin 
                        mengetahui hasil penelitian, silakan hubungi:
                      </small>
                    </p>
                    <p className="mb-0">
                      <strong>Tim Peneliti INITE</strong><br />
                      <small>
                        <i className="bi bi-envelope me-1"></i>
                        {process.env.REACT_APP_CONTACT_EMAIL || 'inite@polteknuklir.ac.id'}
                      </small>
                    </p>
                  </Card.Body>
                </Card>

                {/* Action Buttons */}
                <div className="text-center">
                  <div className="d-flex flex-column flex-md-row justify-content-center align-items-center gap-3">
                    <Link to="/" className="text-decoration-none">
                      <Button variant="primary" size="lg" className="px-4">
                        <i className="bi bi-house me-2"></i>
                        Kembali ke Beranda
                      </Button>
                    </Link>
                    <Button 
                      variant="outline-primary" 
                      size="lg"
                      className="px-4"
                      onClick={() => window.open(process.env.REACT_APP_SIMULATION_URL || 'https://inite-polteknuklir.site', '_blank')}
                    >
                      <i className="bi bi-controller me-2"></i>
                      Kunjungi Simulasi Lagi
                    </Button>
                  </div>
                </div>
              </Card.Body>
            </Card>
          </Col>
        </Row>

        {/* Footer */}
        <Row className="mt-4">
          <Col className="text-center">
            <p className="text-white-50 mb-0">
              <small>
                © 2024 INITE - Politeknik Teknologi Nuklir BRIN
              </small>
            </p>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default ThankYou;