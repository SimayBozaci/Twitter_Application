import axios from 'axios';

export type PostDataType = {
  todo: string;
  id?: string;
};

export const postDataToServer = (data: PostDataType) => {
  axios
    .post(
      'https://64e7540eb0fd9648b78fc9b9.mockapi.io/api/v1/todos/',
      data.todo,
    )
    .then(response => {
      console.log('Veri Kaydedildi', response.data);
      //props.setSearchText('');
      //props.getDataFromServer();
    })
    .catch(error => {
      console.error('Veri kaydedilmedi:', error);
    });
};

export const deleteAPIData = (id: string) => {
  axios
    .delete(`https://64e7540eb0fd9648b78fc9b9.mockapi.io/api/v1/todos/${id}`)
    .then(response => {
      console.log('Veri Kaydedildi ', response.data);
    })
    .catch(error => {
      console.error('Veri Kaydedilmedi', error);
    });
};

export const updateAPIData = (updatedData: PostDataType) => {
  axios
    .put(
      `https://64e7540eb0fd9648b78fc9b9.mockapi.io/api/v1/todos/${updatedData.id}`,
      {todo: updatedData.todo},
    )
    .then(response => {
      console.log('Veri Güncellendi', response.data);
      //props.setSearchText(''); //arama kutusunun içerisini temizledik
      //props.getDataFromServer();
    })

    .catch(error => {
      console.error('Veri güncellenmedi', error);
    });
};
