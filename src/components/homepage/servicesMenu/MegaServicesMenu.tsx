import MegaMenuItem from "./MegaMenuItem";
import { megaServicesMenuInfo } from "@/configurations/servicesDetails";

const MegaServicesMenu = ({ toggleServicesMenu }: { toggleServicesMenu: () => void }) => {

  return (
    <div className="container">
      <div className="row row-cols-5">
        {megaServicesMenuInfo.map((item, index) => {
          return (
            <MegaMenuItem
              keyId={index}
              key={index}
              icon={item.icon}
              title={item.title}
              description={item.description}
              subservices={item.subservices}
              toggleServicesMenu={toggleServicesMenu}
            />
          )
        })
        }
      </div>
    </div>
  );
};

export default MegaServicesMenu;


