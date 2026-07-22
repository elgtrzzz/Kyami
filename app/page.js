efault function Home() {
  return (
    <main style={{
      minHeight: "100vh",
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
      alignItems: "center",
      padding: "40px",
      fontFamily: "Arial, sans-serif"
    }}>
      <h1 style={{
        fontSize: "48px",
        marginBottom: "20px"
      }}>
        🚀 Mon Application
      </h1>

      <p style={{
        fontSize: "20px",
        textAlign: "center",
        maxWidth: "600px"
      }}>
        Bienvenue sur mon application.
        <br />
        Vercel ✅
        <br />
        Supabase ✅
        <br />
        Google AI ✅
      </p>

      <button style={{
        marginTop: "30px",
        padding: "15px 30px",
        fontSize: "18px",
        borderRadius: "10px",
        cursor: "pointer",
        border: "none"
      }}>
        Commencer
      </button>
    </main>
  );
}
