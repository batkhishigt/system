import Layout from "components/Layouts/admin";
import Modal from "components/Base/Modal";
import { useState } from "react";
import Tab from "components/Base/Tab/index";
import { useRouter } from "next/router";
import UserCreateForm from "components/User/userCreatForm";
const Index = () => {
  const [modal, setModal] = useState("is-active");

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
