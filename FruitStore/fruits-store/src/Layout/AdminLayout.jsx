 import { Outlet } from "react-router-dom";
 import AdminTopBar from "../components/Admin/AdminTopBar";


 const AdminLayout = () => {
    return (
      <>
      <div className='flex flex-col flex-initial'>
      <div className=''>
          <AdminTopBar/>
 
        
         
          </div>

<Outlet />

</div>
</>
)
}

export default AdminLayout