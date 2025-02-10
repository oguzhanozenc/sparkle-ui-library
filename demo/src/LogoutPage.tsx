import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "sparkle-ui-library";
export default function LogoutPage() {
  const navigate = useNavigate();

  useEffect(() => {
    const timer = setTimeout(() => {
      navigate("/");
    }, 2000);
    return () => clearTimeout(timer);
  }, [navigate]);

  return (
    <div style={{ textAlign: "center", padding: "50px" }}>
      <Button loading variant="secondary"></Button>
      <h2>You’ve "logged out" of the demo! ✨</h2>
      <p>Redirecting you back to the Introduction...</p>
      <small>*This page is for demonstration purposes only.</small>
    </div>
  );
}
