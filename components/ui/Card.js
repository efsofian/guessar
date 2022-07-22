import { StyleSheet, View, Dimensions } from "react-native";
import Colors from "../../constants/colors";

const deviceWidth = Dimensions.get("window").width;

const Card = ({ children }) => {
	return <View style={styles.card}>{children}</View>;
};

const styles = StyleSheet.create({
	card: {
		justifyContent: "center",
		alignItems: "center",
		marginHorizontal: 24,
		padding: 16,
		marginTop: deviceWidth < 380 ? 18 : 36,
		backgroundColor: Colors.primary700,
		borderRadius: 8,
		elevation: 4,
		shadowColor: "black",
		shadowOffset: { width: 0, height: 2 },
		shadowRadius: 6,
		shadowOpacity: 0.25,
	},
});

export default Card;
