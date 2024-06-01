import ProfileHeader from "../components/specific/ProfileHeader";
import ProfileTabs from "../components/specific/ProfileTabs";
import useUser from "../components/hooks/useUser";
import {useEffect} from "react";

function ProfilePage() {

    const { user } = useUser();

    useEffect(() => {
        if (user) {
            console.log(user)
        } else {
            console.log('er')
        }
    }, [user]);

  return (
    <section className="min-h-screen  mx-auto container max-w-[1335px] lg:px-0 px-5 mt-20">
      <ProfileHeader name={user? user.username:""} balance={user? user.balance:""} avatar={user? user.photo:''}/>
      <ProfileTabs/>
    </section>
  );
}

export default ProfilePage;
