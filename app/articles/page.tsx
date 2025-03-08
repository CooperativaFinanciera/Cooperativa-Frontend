import styles from '../../styles/style.module.css'; // Revisa la ruta

export default function ArticlesPage() {
  return (
    <main id="PAGES_CONTAINER" className={styles.pagesContainer} tabIndex={-1} data-main-content="true">
      <div id="SITE_PAGES" className={styles.sitePages}>
        <div id="SITE_PAGES_TRANSITION_GROUP" className={styles.transitionGroup}>
          <div id="tgvzp" className={styles.pageContainer}>
            <div className={styles.pageBg}></div>
            <div className={styles.pageContent}>
              <div id="Containertgvzp" className={styles.container}>
                <div className={styles.inlineContent}>
                  <div className={styles.gridContainer}>
                    
                    {/* Imagen arriba de las tarjetas */}
                    <img
                      src="https://static.wixstatic.com/media/9edfb0_c0fd437b521d4e83960bca2981e768a4~mv2.jpg/v1/fill/w_1265,h_440,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/9edfb0_c0fd437b521d4e83960bca2981e768a4~mv2.jpg"
                      alt="Imagen principal"
                      className="w-full h-auto mb-8"
                    />
                    
                    {/* Sección con el recuadro azul alrededor de los textos */}
                    <section id="section" className={styles.section}>
                      <div className={styles.bgLayers}></div>
                      <div className={styles.inlineContent}>
                        <div className={styles.gridContainer}>
                          <div className={`${styles.richText} ${styles.textContainer}`}>
                            <h2 className={`${styles.title} text-[#00335f] md:text-6xl text-center`}>
                              Explora nuestras opciones de cuentas financieras.
                            </h2>
                          </div>
                          <div className={`${styles.richText} ${styles.textContainer}`}>
                            <p className="font_2 text-gray-700 md:text-m text-m text-center">
                              Nuestras opciones de cuentas diseñadas para satisfacer sus necesidades financieras individuales y empresariales.
                            </p>
                          </div>
                        </div>
                      </div>
                    </section>

                    {/* Sección con la tarjeta */}
                    <section id="comp-card-section" className={styles.cardSection}>
                      <div id="cardContainer" className={styles.cardContainer}>
                        <div className={styles.card}>
                          <h3 className={`${styles.cardTitle} text-center`}>
                            A futuro seleccionarán su cuenta bancaria ideal
                          </h3>
                          <p className={styles.cardDescription}>
                            Descubra a futuro las opciones del Proyecto de la Cooperativa Financiera para ofrecer y elegirán la que mejor se adapte a su necesidad.
                          </p>
                          <p className={styles.cardDescription}>
                            Cuentan con el respaldo del Proyecto de la Cooperativa Financiera y obtendrán acceso a su dinero en el momento que lo necesite, sin complicaciones y retrasos.
                          </p>
                        </div>
                        
                        {/* Imagen a la derecha de la tarjeta */}
                        <img className={styles.cardImage} src="/credito.jpg" alt="Imagen de crédito" />
                      </div>
                    </section>

                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
