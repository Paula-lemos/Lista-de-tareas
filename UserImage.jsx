function UserImage({ imgUrl, imgAlt }) {
  return (
    <div>
      <img className="cambio-img" src={imgUrl} alt={imgAlt} width="150px" />
      <p>{imgAlt} </p>
    </div>
  );
}
export default UserImage;
