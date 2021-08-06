import React from "react";
import style from "./style.module.css";
import { Link } from "react-router-dom";

// Components
import Input from "../../components/Input";
import Button from "../../components/Button";

const index = ({ handleSubmitForm, handleChangeForm, formPlaylist }) => {
  return (
    <form onSubmit={handleSubmitForm} className={style.playlist_form}>
      <Input
        id="title"
        type="text"
        name="title"
        onChange={handleChangeForm}
        value={formPlaylist.title}
        placeholder="Input Title"
        autoComplete="off"
        minLength="10"
        required
      />
      <Input
        id="desc"
        type="text"
        name="desc"
        onChange={handleChangeForm}
        value={formPlaylist.desc}
        placeholder="Input Description"
        autoComplete="off"
        minLength="20"
        required
      />
      <div className={style.button_form}>
        <Button type="submit" bg="#00A512">
          Submit
        </Button>

        <Button bg="red">
          <Link to="/playlist">Cancel</Link>
        </Button>
      </div>
    </form>
  );
};

export default index;
