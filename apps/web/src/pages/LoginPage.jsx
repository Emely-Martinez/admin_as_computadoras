import React, { useState } from 'react';
import { Link, useNavigate, useLocation } from 'react-router-dom';
import { useAuth } from '@/contexts/AuthContext.jsx';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { toast } from 'sonner';

function LoginPage() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);
  const { login } = useAuth();
  const navigate = useNavigate();
  const location = useLocation();

  const from = location.state?.from?.pathname || '/';

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      const authData = await login(email, password);
      toast.success('Sesión iniciada correctamente');
      
      if (authData.record.role === 'admin') navigate('/admin');
      else if (authData.record.role === 'empleado') navigate('/empleados');
      else navigate(from === '/login' ? '/' : from);
      
    } catch (error) {
      toast.error('Error al iniciar sesión. Verifica tus credenciales.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-[80vh] flex items-center justify-center px-4 py-12">
      <div className="w-full max-w-md bg-card p-8 rounded-2xl shadow-lg border border-border">
        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold mb-2">Bienvenido de nuevo</h1>
          <p className="text-muted-foreground">Ingresa a tu cuenta de AS Computadoras</p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="space-y-2">
            <Label htmlFor="email">Correo Electrónico</Label>
            <Input 
              id="email" 
              type="email" 
              value={email} 
              onChange={(e) => setEmail(e.target.value)} 
              required 
              className="bg-background text-foreground"
            />
          </div>
          <div className="space-y-2">
            <Label htmlFor="password">Contraseña</Label>
            <Input 
              id="password" 
              type="password" 
              value={password} 
              onChange={(e) => setPassword(e.target.value)} 
              required 
              className="bg-background text-foreground"
            />
          </div>
          <Button type="submit" className="w-full" disabled={loading}>
            {loading ? 'Iniciando...' : 'Iniciar Sesión'}
          </Button>
        </form>

        <div className="mt-6 text-center text-sm text-muted-foreground">
          ¿No tienes una cuenta?{' '}
          <Link to="/signup" className="text-primary hover:underline font-medium">
            Regístrate aquí
          </Link>
        </div>
      </div>
    </div>
  );
}

export default LoginPage;