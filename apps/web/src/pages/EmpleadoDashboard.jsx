import React from 'react';
import { useAuth } from '@/contexts/AuthContext.jsx';

function EmpleadoDashboard() {
  const { currentUser } = useAuth();

  return (
    <div className="py-12">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-3xl font-bold mb-8">Panel de Empleado</h1>
        <p className="mb-8 text-muted-foreground">Bienvenido, {currentUser?.name || 'Empleado'}</p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="bg-card p-6 rounded-xl border border-border">
            <h3 className="font-semibold mb-4 text-xl">Gestión de Productos</h3>
            <p className="text-muted-foreground mb-4">Agrega o edita productos en el catálogo.</p>
            <button className="text-primary hover:underline">Ir a productos &rarr;</button>
          </div>
          <div className="bg-card p-6 rounded-xl border border-border">
            <h3 className="font-semibold mb-4 text-xl">Contenido</h3>
            <p className="text-muted-foreground mb-4">Sube imágenes y videos para aprobación.</p>
            <button className="text-primary hover:underline">Ir a contenido &rarr;</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default EmpleadoDashboard;