import React, { useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { Menu, X, User, LogOut } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useAuth } from '@/contexts/AuthContext.jsx';

function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();
  const { isAuthenticated, role, logout, currentUser } = useAuth();

  const navItems = [
    { name: 'Inicio', path: '/' },
    { name: 'Servicios', path: '/servicios' },
    { name: 'Sobre Nosotros', path: '/sobre-nosotros' },
    { name: 'Contacto', path: '/contacto' }
  ];

  if (role === 'admin') navItems.push({ name: 'Admin', path: '/admin' });
  if (role === 'empleado') navItems.push({ name: 'Empleados', path: '/empleados' });

  const isActive = (path) => location.pathname === path;

  const handleLogout = () => {
    logout();
    navigate('/');
  };

  return (
    <header className="sticky top-0 z-50 w-full border-b border-border bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/80">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex h-20 items-center justify-between">
          <Link to="/" className="flex items-center gap-3">
            <img 
              src="https://horizons-cdn.hostinger.com/83597fb5-53ae-4452-a994-518058c517e4/c2c4bb09115fb12124e7a2a13bf5cc6e.jpg" 
              alt="AS COMPUTADORAS logo" 
              className="h-12 w-auto rounded-lg"
            />
          </Link>

          <nav className="hidden md:flex items-center gap-8">
            {navItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                className={`text-sm font-medium transition-all duration-200 hover:text-primary relative ${
                  isActive(item.path) ? 'text-primary font-semibold' : 'text-muted-foreground hover:text-foreground'
                }`}
              >
                {item.name}
              </Link>
            ))}
          </nav>

          <div className="flex items-center gap-4">
            <a
              href="https://wa.link/ano4vq"
              target="_blank"
              rel="noopener noreferrer"
              className="hidden sm:flex items-center justify-center w-10 h-10 rounded-full bg-[#25D366] hover:bg-[#20bd5a] transition-colors"
            >
              <img src="https://horizons-cdn.hostinger.com/83597fb5-53ae-4452-a994-518058c517e4/86f4c1c7bf7308511def27650db8b5da.png" alt="WhatsApp" className="w-6 h-6" />
            </a>

            {isAuthenticated ? (
              <div className="hidden sm:flex items-center gap-2">
                <Button variant="ghost" size="sm" asChild>
                  <Link to="/perfil" className="flex items-center gap-2">
                    <User className="w-4 h-4" />
                    <span className="max-w-[100px] truncate">{currentUser.name || 'Perfil'}</span>
                  </Link>
                </Button>
                <Button variant="ghost" size="icon" onClick={handleLogout}>
                  <LogOut className="w-4 h-4" />
                </Button>
              </div>
            ) : (
              <Button asChild variant="default" className="hidden sm:flex">
                <Link to="/login">Iniciar Sesión</Link>
              </Button>
            )}

            <Button
              variant="ghost"
              size="icon"
              className="md:hidden text-foreground"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </Button>
          </div>
        </div>

        {mobileMenuOpen && (
          <div className="md:hidden border-t border-border py-4">
            <nav className="flex flex-col gap-4">
              {navItems.map((item) => (
                <Link
                  key={item.path}
                  to={item.path}
                  onClick={() => setMobileMenuOpen(false)}
                  className={`text-sm font-medium px-4 py-2 rounded-lg transition-all duration-200 ${
                    isActive(item.path)
                      ? 'bg-primary/10 text-primary font-semibold'
                      : 'text-muted-foreground hover:text-foreground hover:bg-muted'
                  }`}
                >
                  {item.name}
                </Link>
              ))}
              {!isAuthenticated && (
                <Link to="/login" onClick={() => setMobileMenuOpen(false)} className="text-sm font-medium px-4 py-2 text-primary">
                  Iniciar Sesión
                </Link>
              )}
              {isAuthenticated && (
                <button onClick={() => { handleLogout(); setMobileMenuOpen(false); }} className="text-sm font-medium px-4 py-2 text-left text-destructive">
                  Cerrar Sesión
                </button>
              )}
            </nav>
          </div>
        )}
      </div>
    </header>
  );
}

export default Header;