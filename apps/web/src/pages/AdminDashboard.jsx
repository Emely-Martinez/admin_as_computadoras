import React, { useState, useEffect } from 'react';
import { useAuth } from '@/contexts/AuthContext.jsx';
import pb from '@/lib/pocketbaseClient';
import { Button } from '@/components/ui/button';
import { toast } from 'sonner';

function AdminDashboard() {
  const { currentUser } = useAuth();
  const [users, setUsers] = useState([]);

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const records = await pb.collection('users').getFullList({ $autoCancel: false });
        setUsers(records);
      } catch (error) {
        console.error(error);
      }
    };
    fetchUsers();
  }, []);

  return (
    <div className="py-12">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-3xl font-bold mb-8">Panel de Administración</h1>
        <p className="mb-8 text-muted-foreground">Bienvenido, {currentUser?.name || 'Admin'}</p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          <div className="bg-card p-6 rounded-xl border border-border">
            <h3 className="font-semibold mb-2">Total Usuarios</h3>
            <p className="text-3xl font-bold text-primary">{users.length}</p>
          </div>
          <div className="bg-card p-6 rounded-xl border border-border">
            <h3 className="font-semibold mb-2">Gestión de Productos</h3>
            <Button variant="outline" className="w-full mt-4">Administrar</Button>
          </div>
          <div className="bg-card p-6 rounded-xl border border-border">
            <h3 className="font-semibold mb-2">Gestión de Contenido</h3>
            <Button variant="outline" className="w-full mt-4">Administrar</Button>
          </div>
        </div>

        <div className="bg-card rounded-xl border border-border overflow-hidden">
          <div className="p-6 border-b border-border">
            <h2 className="text-xl font-semibold">Usuarios Registrados</h2>
          </div>
          <div className="overflow-x-auto">
            <table className="w-full text-left">
              <thead className="bg-muted/50">
                <tr>
                  <th className="p-4 font-medium">Nombre</th>
                  <th className="p-4 font-medium">Email</th>
                  <th className="p-4 font-medium">Rol</th>
                </tr>
              </thead>
              <tbody>
                {users.map(user => (
                  <tr key={user.id} className="border-b border-border/50">
                    <td className="p-4">{user.name || '-'}</td>
                    <td className="p-4">{user.email}</td>
                    <td className="p-4">
                      <span className="px-2 py-1 rounded-full bg-primary/10 text-primary text-xs font-medium">
                        {user.role}
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AdminDashboard;