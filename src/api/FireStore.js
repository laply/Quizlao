import firestore from '@react-native-firebase/firestore';

const storeName = 'rank-quizlao';

export async function getRank() {
  return await firestore().collection(storeName).get();
}

export async function addRank(RankInfo) {
  await firestore()
    .collection(storeName)
    .add(RankInfo)
    .then(() => {
      console.log('User added!');
    });
}
