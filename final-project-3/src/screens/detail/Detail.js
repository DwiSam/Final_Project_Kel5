import axios from "axios";
import { useEffect, useState } from "react";
import { ScrollView, View } from "react-native";
import CardDetail from "../../components/CardDetail";

const Detail = ({ route }) => {
  const [detail, setDetail] = useState([]);
  const { id } = route.params;

  useEffect(() => {
    (async () => {
      const response = await axios({
        method: "GET",
        url: "https://priceline-com-provider.p.rapidapi.com/v1/hotels/details",
        params: { hotel_id: id },
        headers: {
          "X-RapidAPI-Key":
            "d028c0810cmsh55a093d5e64ae64p1a3554jsn07f01410505d",
          "X-RapidAPI-Host": "priceline-com-provider.p.rapidapi.com",
        },
      })
        .then((response) => {
          setDetail(response.data);
        })
        .catch((error) => console.log(error.response));
    })();
  }),
    [];

  return (
    <View>
      <ScrollView>
        <CardDetail key={detail.hotelId} hotel={detail} />
      </ScrollView>
    </View>
  );
};

export default Detail;
