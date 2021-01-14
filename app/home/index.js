import React, { useEffect } from 'react'
import { FlatList, Text, View } from 'react-native';
import { connect } from 'react-redux'
import { GET_ALL_USER_INFO_REQUEST } from '../models/user/actions';

const mapStateToProps = (state, props) => {
	// const { id, name, email } = state.user;
	// return { id, name, email };
	const temp = state.user;
	return {
		allUserData: state.user
	};
};

const mapDispatchToProps = (dispatch, props) => ({
	getAllUserInfo: () => {
		dispatch({
			type: GET_ALL_USER_INFO_REQUEST,
			payload: {}
		});
	}
});

const HomeView = ({ allUserData, getAllUserInfo, navigation }) => {

	useEffect(() => {
		getAllUserInfo()
	}, [getAllUserInfo]);

	const renderChild = ({ item }) => {

		console.log(item)

		return (
			<View style={{ marginVertical: 10 }}>
				<Text style={{ paddingVertical: 20 }} >{item.title}</Text>
			</View>
		);
	}

	return (
		<View>
			{ allUserData === undefined ? 
				<Text>
					No Data Found
				</Text> :
				<>
					<Text>Hello</Text>
					<FlatList 
						data={allUserData}
						renderItem={renderChild}
						keyExtractor={item => item.id}
					/>
				</>
			}
		</View>
	);
};

const Home = connect(
	mapStateToProps,
	mapDispatchToProps
)(HomeView);

export { Home };