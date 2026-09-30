import React from 'react';
import { useAuth } from '@/contexts/AuthContext.jsx';
import { Button } from '@/components/ui/button';

function PerfilPage() {
  const { currentUser, logout } = useAuth();

  return (
    <div className="py-12">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-2xl">
        <h1 className="text-3xl font-bold mb-8">Mi Perfil</h1>
        
        <div className="bg-card p-8 rounded-2xl border border-border space-y-6">
          <div>
            <label className="text-sm text-muted-foreground block mb-1">Nombre</label>
            <p className="text-lg font-medium">{currentUser?.name || 'No especificado'}</p>
          </div>
          <div>
            <label className="text-sm text-muted-foreground block mb-1">Correo Electrónico</label>
            <p className="text-lg font-medium">{currentUser?.email}</p>
          </div>
          <div>
            <label className="text-sm text-muted-foreground block mb-1">Rol</label>
            <p className="text-lg font-medium capitalize">{currentUser?.role}</p>
          </div>
          
          <div className="pt-6 border-t border-border flex gap-4">
            <Button variant="outline">Editar Perfil</Button>
            <Button variant="destructive" onClick={logout}>Cerrar Sesión</Button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default PerfilPage;