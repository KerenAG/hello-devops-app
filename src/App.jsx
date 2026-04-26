export default function App() {
  const steps = [
    "Crear aplicación web con React",
    "Contenerización con Docker",
    "Definir Dockerfile",
    "Construir imagen Docker",
    "Publicar en Docker Hub"
  ]

  return (
    <div style={styles.page}>
      
      <div style={styles.card}>
        
        <h1 style={styles.title}>DevOps CI/CD Pipeline</h1>
        
        <p style={styles.subtitle}>
          Desarrollo y despliegue de aplicación web con contenedores
        </p>

        <div style={styles.list}>
          {steps.map((step, index) => (
            <div key={index} style={styles.stepCard}>
              
              <div style={styles.number}>{index + 1}</div>
              
              <div style={styles.text}>
                {step}
              </div>

            </div>
          ))}
        </div>

        <div style={styles.footer}>
          Entorno preparado para flujo CI/CD con Docker
        </div>

      </div>

    </div>
  )
}

const styles = {
  page: {
    minHeight: "100vh",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    background: "linear-gradient(135deg, #fff0f5, #ffe4ec)",
    fontFamily: "Arial, sans-serif",
    padding: "20px"
  },

  card: {
    width: "650px",
    backgroundColor: "#ffffff",
    borderRadius: "16px",
    padding: "35px",
    boxShadow: "0 10px 30px rgba(0,0,0,0.08)"
  },

  title: {
    fontSize: "28px",
    fontWeight: "700",
    color: "#d63384",
    marginBottom: "8px"
  },

  subtitle: {
    fontSize: "16px",
    color: "#6c757d",
    marginBottom: "25px"
  },

  list: {
    display: "flex",
    flexDirection: "column",
    gap: "12px"
  },

  stepCard: {
    display: "flex",
    alignItems: "center",
    gap: "15px",
    padding: "14px",
    borderRadius: "12px",
    backgroundColor: "#fff5f8",
    border: "1px solid #f8cdd9"
  },

  number: {
    width: "32px",
    height: "32px",
    borderRadius: "50%",
    backgroundColor: "#f472b6",
    color: "white",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    fontWeight: "bold",
    fontSize: "14px"
  },

  text: {
    fontSize: "16px",
    color: "#333"
  },

  footer: {
    marginTop: "25px",
    fontSize: "13px",
    color: "#888"
  }
}