import { Badge, IconButton } from "@mui/material";
import styles from "../administratif/styles.module.css";
import MySideNav from "../compte_alumni/sidenav";
import { MailLockOutlined } from "@mui/icons-material";
const EspacEtudiant = () => {
  function notificationsLabel(count) {
    if (count === 0) {
      return 'no notifications';
    }
    if (count > 99) {
      return 'more than 99 notifications';
    }
    return `${count} notifications`;
  }
  

  return (
    <div className={styles.main_container}>
      <MySideNav />
    
      
      
    
    </div>
  );
};

export default EspacEtudiant;
