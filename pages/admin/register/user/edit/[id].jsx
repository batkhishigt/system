import Layout from "components/Layouts/admin";
import Tab from "components/Base/Tab/index";
import { useRouter } from "next/router";
import UserCreateForm from "components/User/userCreatForm";
const Index = () => {
  const router = useRouter();
  const { tab } = router.query;

  return (
    <Layout>
      <div>
        <Tab />
        <UserCreateForm />
      </div>
    </Layout>
  );
};
export default Index;
