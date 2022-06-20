import {getAuthUserData} from "../Redux/authReducer";

const withAuthRedirect = (component) => {
    async function authCheck () {
      await getAuthUserData();
    }
    return <component isFetching={false}/>
}
export default withAuthRedirect;