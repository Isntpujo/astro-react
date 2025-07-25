// import "../../../styles/components/_connectionStatus.scss";
import useOnline from "../../hooks/useOnline";

const UserConnectionStatus = () => {
  const isOnline = useOnline();

  return (
    <>
      {isOnline ? null : (
        <div className="connection-status">
          Your Connection Is Lost, You Still Can Use This App But Do Not Close
          This App Till Your Connection Back To Normal
        </div>
      )}
    </>
  );
};

export default UserConnectionStatus;
