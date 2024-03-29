import { Nav } from "react-bootstrap";
import { NavLink } from "react-router-dom";
import { Link } from "react-router-dom";

export default function AdminNavbar() {
  const menu = [
    {
      path: "/admin/userInfo", // the url
      name: "Kullanıcı Bilgileri", // name that appear in Sidebar
    },
    {
      path: "/admin/billsInfo",
      name: "Aidat Bilgileri",
    },
    {
      path: "/admin/aptInfo",
      name: "Daire Bilgileri",
    },
  ];

  return (
    <>
      <h2>Yönetici Paneli</h2>
      <ul>
        {menu.map((menuItem) => (
          <li key={menuItem.name}>
            <Link to={menuItem.path}>{menuItem.name}</Link>
          </li>
        ))}
      </ul>
    </>
  );
}
