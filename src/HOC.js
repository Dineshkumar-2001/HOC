import {
    useLocation,
    useNavigate,
    useParams
  } from "react-router-dom";

  export const withRouter = (Component) =>  {
    function ComponentWithRouterProp(props) {
      let location = useLocation();
      let navigate = useNavigate();
      let params = useParams();
      return (
        <div style={{color:"red"}}>
        <Component
          {...props}
          router={{ location, navigate, params }}
        />
        </div>
      );
    }
    return ComponentWithRouterProp;
  }
