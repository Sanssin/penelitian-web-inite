import React from 'react';
import { Link } from 'react-router-dom';
import { Container, Row, Col, Button, Card } from 'react-bootstrap';
import logoInite from '../assets/logo_inite.png';
import atomIcon from '../assets/atom.png';
import gamePreview from '../assets/game.png';
import maskot1 from '../assets/maskot1.png';
import logoBrin from '../assets/BRIN.png';
import logoPoltek from '../assets/Poltek.png';
import logoHima from '../assets/logoHimaTransparanPutih.png';

const LandingPage = () => {
  return (
    <div>
      {/* Hero Section */}
      <section className="hero-section">
        <Container>
          <Row className="justify-content-center">
            <Col lg={8} className="text-center">
              <div className="hero-content">
                <img src={logoInite} alt="INITE Logo" className="logo-main mb-4" />
                <h1 className="hero-title">INITE</h1>
                <h2 className="hero-subtitle">Penelitian Efektivitas Penggunaan Website Interaktif untuk Edukasi Kenukliran</h2>
                <p className="lead mb-4">
                  Bergabunglah dalam penelitian tentang efektivitas simulasi interaktif 
                  dalam pembelajaran teknologi nuklir dan keselamatan radiasi
                </p>
                <Link to="/research-flow">
                  <Button className="btn-research">
                    <i className="bi bi-play-circle me-2"></i>
                    Mulai Penelitian
                  </Button>
                </Link>
              </div>
            </Col>
          </Row>
        </Container>
      </section>

      {/* Alur Penelitian */}
      <section className="research-flow">
        <Container>
          <Row className="text-center mb-5">
            <Col lg={8} className="mx-auto">
              <h2 className="display-4 mb-3">Alur Penelitian</h2>
              <p className="lead text-muted">
                Ikuti langkah-langkah penelitian untuk memberikan kontribusi pada 
                pengembangan pendidikan teknologi nuklir
              </p>
            </Col>
          </Row>
          
          <Row className="align-items-center">
            <Col lg={3} md={6} className="mb-4">
              <div className="flow-step">
                <div className="step-number">1</div>
                <div className="step-icon">
                  <i className="bi bi-clipboard-check"></i>
                </div>
                <h4>Pre-Test</h4>
                <p>Isi kuesioner pre-test untuk mengukur pengetahuan awal Anda tentang teknologi nuklir dan keselamatan radiasi.</p>
                <div className="arrow-connector">
                  <i className="bi bi-arrow-right"></i>
                </div>
              </div>
            </Col>
            
            <Col lg={3} md={6} className="mb-4">
              <div className="flow-step">
                <div className="step-number">2</div>
                <div className="step-icon">
                  <i className="bi bi-controller"></i>
                </div>
                <h4>Simulasi</h4>
                <p>Akses dan gunakan simulasi interaktif INITE untuk mempelajari konsep teknologi nuklir secara praktis.</p>
                <div className="arrow-connector">
                  <i className="bi bi-arrow-right"></i>
                </div>
              </div>
            </Col>
            
            <Col lg={3} md={6} className="mb-4">
              <div className="flow-step">
                <div className="step-number">3</div>
                <div className="step-icon">
                  <i className="bi bi-clipboard-data"></i>
                </div>
                <h4>Post-Test</h4>
                <p>Lengkapi kuesioner post-test untuk mengukur peningkatan pemahaman setelah menggunakan simulasi.</p>
                <div className="arrow-connector">
                  <i className="bi bi-arrow-right"></i>
                </div>
              </div>
            </Col>
            
            <Col lg={3} md={6} className="mb-4">
              <div className="flow-step">
                <div className="step-number">4</div>
                <div className="step-icon">
                  <i className="bi bi-trophy"></i>
                </div>
                <h4>Selesai</h4>
                <p>Terima kasih atas partisipasi Anda! Data akan membantu pengembangan pendidikan teknologi nuklir.</p>
              </div>
            </Col>
          </Row>
        </Container>
      </section>

      {/* Preview Simulasi */}
      <section className="simulation-preview">
        <Container>
          <Row className="text-center mb-5">
            <Col lg={8} className="mx-auto">
              <h2 className="display-4 mb-3">Tentang Simulasi INITE</h2>
              <p className="lead text-muted">
                Simulasi interaktif yang mengajarkan konsep teknologi nuklir dan keselamatan radiasi
              </p>
            </Col>
          </Row>
          
          <Row className="align-items-center">
            <Col lg={6} className="mb-4">
              <Card className="preview-card border-0">
                <Card.Img variant="top" src={gamePreview} alt="Preview Simulasi" className="preview-image" />
                <Card.Body className="preview-content">
                  <Card.Title as="h4">Simulasi Interaktif</Card.Title>
                  <Card.Text>
                    Pelajari teknologi nuklir melalui simulasi yang menarik dan interaktif. 
                    Dilengkapi dengan visualisasi 3D, quiz, dan panduan pembelajaran yang komprehensif.
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
            
            <Col lg={6} className="mb-4">
              <div className="text-center">
                <img src={maskot1} alt="Maskot INITE" className="img-fluid mb-3" style={{maxWidth: '250px'}} />
                <h4>Fitur Unggulan</h4>
                <ul className="list-unstyled mt-3">
                  <li className="mb-2"><i className="bi bi-check-circle-fill text-success me-2"></i>Visualisasi 3D Reaktor Nuklir</li>
                  <li className="mb-2"><i className="bi bi-check-circle-fill text-success me-2"></i>Simulasi Keselamatan Radiasi</li>
                  <li className="mb-2"><i className="bi bi-check-circle-fill text-success me-2"></i>Panduan Pembelajaran</li>
                </ul>
                
                {/* Device Recommendation */}
                <div className="mt-4 p-3 bg-warning bg-opacity-10 rounded">
                  <h6 className="text-warning mb-2">
                    <i className="bi bi-laptop me-2"></i>Rekomendasi Perangkat
                  </h6>
                  <small className="text-muted">
                    Untuk pengalaman simulasi yang optimal, gunakan laptop atau komputer desktop
                  </small>
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </section>

      {/* Tentang Penelitian */}
      <section className="about-section">
        <Container>
          <Row className="justify-content-center">
            <Col lg={10}>
              <div className="research-info">
                <Row className="align-items-center">
                  <Col lg={8}>
                    <h2 className="display-5 mb-3">Tentang Penelitian Ini</h2>
                    <p className="lead mb-3">
                      Penelitian ini bertujuan untuk mengukur efektivitas penggunaan simulasi interaktif 
                      dalam meningkatkan pemahaman mahasiswa tentang teknologi nuklir dan keselamatan radiasi.
                    </p>
                    <p className="mb-3">
                      Data yang dikumpulkan akan digunakan untuk:
                    </p>
                    <ul>
                      <li>Menganalisis peningkatan pemahaman konsep teknologi nuklir</li>
                      <li>Mengevaluasi efektivitas metode pembelajaran simulasi</li>
                      <li>Mengembangkan strategi pembelajaran yang lebih baik</li>
                      <li>Memberikan rekomendasi untuk pendidikan teknologi nuklir</li>
                    </ul>
                  </Col>
                  <Col lg={4} className="text-center">
                    <img src={atomIcon} alt="Nuclear Technology" className="img-fluid" style={{maxWidth: '200px'}} />
                  </Col>
                </Row>
              </div>
            </Col>
          </Row>
        </Container>
      </section>

      {/* Footer */}
      <footer className="footer-section">
        <Container>
          <Row>
            <Col lg={12}>
              <img src={logoInite} alt="INITE Logo" className="footer-logo" />
              <h5 className="mt-3">INITE - Indonesian Nuclear Interactive Website</h5>
              <p>Simulasi Pembelajaran Teknologi Nuklir Berbasis Website</p>              
              {/* Partner Institutions */}
              <div className="partner-institutions mt-4 mb-4">
                <h6 className="mb-3">Didukung Oleh:</h6>
                <Row className="justify-content-center align-items-center">
                  <Col xs={4} md={2} className="mb-3">
                    <img src={logoBrin} alt="BRIN" className="partner-logo" />
                  </Col>
                  <Col xs={4} md={2} className="mb-3">
                    <img src={logoPoltek} alt="Politeknik Teknologi Nuklir BRIN" className="partner-logo" />
                  </Col>
                  <Col xs={4} md={2} className="mb-3">
                    <img src={logoHima} alt="HIMA" className="partner-logo" />
                  </Col>
                </Row>
              </div>
              
              <hr className="my-4" />
              <p>&copy; 2025 INITE. Politeknik Teknologi Nuklir-BRIN. All rights reserved.</p>
            </Col>
          </Row>
        </Container>
      </footer>
    </div>
  );
};

export default LandingPage;