import ProfileHeader from "../components/specific/ProfileHeader";
import ProfileTabs from "../components/specific/ProfileTabs";

function ProfilePage() {
  return (
    <section className="min-h-screen  mx-auto container max-w-[1335px] lg:px-0 px-5 mt-20">
      <ProfileHeader name="Adelya Musaeva" balance={300}/>
      <ProfileTabs/>
    </section>
  );
}

export default ProfilePage;
