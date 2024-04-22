import BaseIcon from "./BaseIcon";
import { useNavigate } from "react-router-dom";

const BaseGoBack = (props) => {
  const navigate = useNavigate();
  const goBack = () => navigate(-1);

  return (
    <div className="md:hover:bg-x_neutral-200 p-[6px] rounded-full cursor-pointer w-fit" onClick={() => !props?.disabled && goBack()}>
      <BaseIcon name="go_back" size={16} />
    </div>
  );
};

export default BaseGoBack;
