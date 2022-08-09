import { useState, useEffect } from "react";

import { userService } from "services";

import AdminLayout from "components/Layouts/admin";
export default Home;

function Home() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    userService.getAll().then((res) => {
      setUsers(res.data);
    });
  }, []);

  return (
    <AdminLayout>
      <div className="card mt-4">
        <h4 className="card-header">Youre logged in with Next.js 11 & JWT!!</h4>
        <div className="card-body">
          <h6>Users from secure api end point</h6>
          {users && (
            <ul>
              {users.map((user) => (
                <li key={user._id}>
                  {user.firstName} {user.lastName}
                </li>
              ))}
            </ul>
          )}
          {!users && <div className="spinner-border spinner-border-sm"></div>}
        </div>
      </div>
    </AdminLayout>
  );
}
