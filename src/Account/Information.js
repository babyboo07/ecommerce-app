import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHouse } from '@fortawesome/free-solid-svg-icons';
import BreadcrumbCommon from "../Common/BreadcrumbCommon";

const Information = () => {
    return(
        <div>
            <div>
                <BreadcrumbCommon header={<FontAwesomeIcon icon={faHouse} />} title={"Information"} />
            </div>
        </div>
    );
}

export default Information;