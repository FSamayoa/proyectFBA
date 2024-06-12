import Swal from 'sweetalert2';
import 'sweetalert2/dist/sweetalert2.min.css';

const swalWithDarkTheme = Swal.mixin({
  background: '#1f1f1f',
  color: '#ffffff',
  confirmButtonColor: '#3085d6',
  cancelButtonColor: '#d33',
});

export default swalWithDarkTheme;