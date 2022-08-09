import Layout from "components/Layouts/admin";
import Modal from "components/Base/Modal";
import { useState } from "react";
import Tab from "components/Base/Tab/index";
import { useRouter } from "next/router";
import UserList from "/components/User/List";
const Index = () => {
  const [createModal, setCreateModal] = useState("");

  const router = useRouter();

  const { tab } = router.query;

  return (
    <Layout>
      <div>
        <Tab activeLink={tab} />
        {tab === "user" ? <UserList /> : ""}
      </div>
    </Layout>
  );
};
export default Index;
