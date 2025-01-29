import { StyleSheet } from "react-native";
import { mvs } from "../../../config/metrices";
import { colors } from "../../../config/colors";

const styles = StyleSheet.create({
  cont: {
    flex: 1,
    backgroundColor: "#fff",
  },
  content: {
    padding: mvs(16), 
    // flex: 1,
  },
 
  label:{

    color:colors.grey,

    padding:mvs(7)
  },
  input: {
    backgroundColor: colors.grey + 40,
    padding: mvs(15),
    borderRadius: mvs(10),
    borderWidth: 1,
    borderColor: colors.grey,

  },
  button:{
    marginTop:mvs(15)
  }
});

export default styles;
