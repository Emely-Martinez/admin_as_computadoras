import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useAuth } from '@/contexts/AuthContext.jsx';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { toast } from 'sonner';

function SignupPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    passwordConfirm: ''
  });
  const [loading, setLoading] = useState(false);
  const { signup } = useAuth();
  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.id]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (formData.password !== formData.passwordConfirm) {
      return toast.error('Las contraseñas no coinciden');
    }
    
    setLoading(true);
    try {
      await signup(formData);
      toast.success('Cuenta creada exitosamente');
      navigate('/');
    } catch (error) {
      toast.error('Error al crear la cuenta. Intenta con otro correo.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-[80vh] flex items-center justify-center px-4 py-12">
      <div className="w-full max-w-md bg-card p-8 rounded-2xl shadow-lg border border-border">
        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold mb-2">Crear Cuenta</h1>
          <p className="text-muted-foreground">Únete a AS Computadoras</p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="space-y-2">
            <Label htmlFor="name">Nombre Completo</Label>
            <Input id="name" value={formData.name} onChange={handleChange} required className="bg-background text-foreground" />
          </div>
          <div className="space-y-2">
            <Label htmlFor="email">Correo Electrónico</Label>
            <Input id="email" type="email" value={formData.email} onChange={handleChange} required className="bg-background text-foreground" />
          </div>
          <div className="space-y-2">
            <Label htmlFor="password">Contraseña</Label>
            <Input id="password" type="password" value={formData.password} onChange={handleChange} required minLength={8} className="bg-background text-foreground" />
          </div>
          <div className="space-y-2">
            <Label htmlFor="passwordConfirm">Confirmar Contraseña</Label>
            <Input id="passwordConfirm" type="password" value={formData.passwordConfirm} onChange={handleChange} required minLength={8} className="bg-background text-foreground" />
          </div>
          <Button type="submit" className="w-full mt-6" disabled={loading}>
            {loading ? 'Creando...' : 'Registrarse'}
          </Button>
        </form>

        <div className="mt-6 text-center text-sm text-muted-foreground">
          ¿Ya tienes una cuenta?{' '}
          <Link to="/login" className="text-primary hover:underline font-medium">
            Inicia sesión
          </Link>
        </div>
      </div>
    </div>
  );
}

export default SignupPage;