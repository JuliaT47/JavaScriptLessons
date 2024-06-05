import { useQuery } from "react-query";
import { useParams } from "react-router-dom";

const SingleContact = () => {
  const params = useParams();
  //   const { id } = useParams();
  //   const {data, isFetching} = useQuery({
  //       queryKey: ["singleContact"],
  //       queryFn: () = getSingleContact(id)
  //   });
  // for use with id
  console.log(params);
  return <h3>SingleContact</h3>;
};
export default SingleContact;

// const getSingleContact = async (id) => {
//   const contact = await axios.get(`contacts/${id}`);
//   return contact.data;
// };
// Would use this in the Api.js if was taking information from db.json.
