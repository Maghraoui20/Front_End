import MySideNav from "../sidenav";
import styles from "./styles.module.css";
import { useState, navigate, useEffect } from "react";
import * as api from "../../../service/etudiant";
const Main = () => {
  var user = JSON.parse(localStorage.getItem("profile"));
  console.log(user._id);
  const [data, setData] = useState({
    pays: "",
    societe: "", //string
    promotion: "", //number
    date_diplome: "", //date
    date_embauche: "", //date
    demande: false,
  });
  const [msg, setMsg] = useState("");
  const [error, setError] = useState("");
  useEffect(() => {
    verifEtat();
  });
  const verifEtat = async () => {
    const data = await api.etatEtd(user._id);

    const demande = data.data;
    setMsg(demande);
  };
  const handleLogout = () => {
    localStorage.removeItem("token");
    window.location.reload();
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await api.updateEtudiant(data, user._id);
      navigate("/add-Alumni");
    } catch (error) {
      if (
        error.response &&
        error.response.status >= 400 &&
        error.response.status <= 500
      ) {
        setError(error.response.data.message);
      }
    }
  };
  const handleChange = ({ currentTarget: input }) => {
    console.log(input.value);
    setData({ ...data, [input.name]: input.value });
  };

  return (
    <div className={styles.signup_container}>
      <MySideNav />
      <nav className={styles.navbar}>
        <h1>Bienvenue Etudiant</h1>
        <button className={styles.white_btn} onClick={handleLogout}>
          Logout
        </button>
      </nav>

      {msg === "validé" && <h1> Votre compte Alumni est validé</h1>}
      {msg === "non validé" && (
        <h1> Votre compte Alumni est encore non validé</h1>
      )}

      <div className={styles.signup_form_container}>
        <div className={styles.right}>
          <form className={styles.form_container} onSubmit={handleSubmit}>
            <h1>Vos données alumni</h1>
            <select
              name="pays"
              onChange={handleChange}
              value={data.pays}
              required
              className={styles.input}
            >
              <option value="France" selected="selected">
                France
              </option>

              <option value="Afghanistan">Afghanistan </option>
              <option value="Afrique_Centrale">Afrique_Centrale </option>
              <option value="Afrique_du_sud">Afrique_du_Sud </option>
              <option value="Albanie">Albanie </option>
              <option value="Algerie">Algerie </option>
              <option value="Allemagne">Allemagne </option>
              <option value="Andorre">Andorre </option>
              <option value="Angola">Angola </option>
              <option value="Anguilla">Anguilla </option>
              <option value="Arabie_Saoudite">Arabie_Saoudite </option>
              <option value="Argentine">Argentine </option>
              <option value="Armenie">Armenie </option>
              <option value="Australie">Australie </option>
              <option value="Autriche">Autriche </option>
              <option value="Azerbaidjan">Azerbaidjan </option>

              <option value="Bahamas">Bahamas </option>
              <option value="Bangladesh">Bangladesh </option>
              <option value="Barbade">Barbade </option>
              <option value="Bahrein">Bahrein </option>
              <option value="Belgique">Belgique </option>
              <option value="Belize">Belize </option>
              <option value="Benin">Benin </option>
              <option value="Bermudes">Bermudes </option>
              <option value="Bielorussie">Bielorussie </option>
              <option value="Bolivie">Bolivie </option>
              <option value="Botswana">Botswana </option>
              <option value="Bhoutan">Bhoutan </option>
              <option value="Boznie_Herzegovine">Boznie_Herzegovine </option>
              <option value="Bresil">Bresil </option>
              <option value="Brunei">Brunei </option>
              <option value="Bulgarie">Bulgarie </option>
              <option value="Burkina_Faso">Burkina_Faso </option>
              <option value="Burundi">Burundi </option>

              <option value="Caiman">Caiman </option>
              <option value="Cambodge">Cambodge </option>
              <option value="Cameroun">Cameroun </option>
              <option value="Canada">Canada </option>
              <option value="Canaries">Canaries </option>
              <option value="Cap_vert">Cap_Vert </option>
              <option value="Chili">Chili </option>
              <option value="Chine">Chine </option>
              <option value="Chypre">Chypre </option>
              <option value="Colombie">Colombie </option>
              <option value="Comores">Colombie </option>
              <option value="Congo">Congo </option>
              <option value="Congo_democratique">Congo_democratique </option>
              <option value="Cook">Cook </option>
              <option value="Coree_du_Nord">Coree_du_Nord </option>
              <option value="Coree_du_Sud">Coree_du_Sud </option>
              <option value="Costa_Rica">Costa_Rica </option>
              <option value="Cote_d_Ivoire">Côte_d_Ivoire </option>
              <option value="Croatie">Croatie </option>
              <option value="Cuba">Cuba </option>

              <option value="Danemark">Danemark </option>
              <option value="Djibouti">Djibouti </option>
              <option value="Dominique">Dominique </option>

              <option value="Egypte">Egypte </option>
              <option value="Emirats_Arabes_Unis">Emirats_Arabes_Unis </option>
              <option value="Equateur">Equateur </option>
              <option value="Erythree">Erythree </option>
              <option value="Espagne">Espagne </option>
              <option value="Estonie">Estonie </option>
              <option value="Etats_Unis">Etats_Unis </option>
              <option value="Ethiopie">Ethiopie </option>

              <option value="Falkland">Falkland </option>
              <option value="Feroe">Feroe </option>
              <option value="Fidji">Fidji </option>
              <option value="Finlande">Finlande </option>
              <option value="France">France </option>

              <option value="Gabon">Gabon </option>
              <option value="Gambie">Gambie </option>
              <option value="Georgie">Georgie </option>
              <option value="Ghana">Ghana </option>
              <option value="Gibraltar">Gibraltar </option>
              <option value="Grece">Grece </option>
              <option value="Grenade">Grenade </option>
              <option value="Groenland">Groenland </option>
              <option value="Guadeloupe">Guadeloupe </option>
              <option value="Guam">Guam </option>
              <option value="Guatemala">Guatemala</option>
              <option value="Guernesey">Guernesey </option>
              <option value="Guinee">Guinee </option>
              <option value="Guinee_Bissau">Guinee_Bissau </option>
              <option value="Guinee equatoriale">Guinee_Equatoriale </option>
              <option value="Guyana">Guyana </option>
              <option value="Guyane_Francaise ">Guyane_Francaise </option>

              <option value="Haiti">Haiti </option>
              <option value="Hawaii">Hawaii </option>
              <option value="Honduras">Honduras </option>
              <option value="Hong_Kong">Hong_Kong </option>
              <option value="Hongrie">Hongrie </option>

              <option value="Inde">Inde </option>
              <option value="Indonesie">Indonesie </option>
              <option value="Iran">Iran </option>
              <option value="Iraq">Iraq </option>
              <option value="Irlande">Irlande </option>
              <option value="Islande">Islande </option>
              <option value="Israel">Israel </option>
              <option value="Italie">italie </option>

              <option value="Jamaique">Jamaique </option>
              <option value="Jan Mayen">Jan Mayen </option>
              <option value="Japon">Japon </option>
              <option value="Jersey">Jersey </option>
              <option value="Jordanie">Jordanie </option>

              <option value="Kazakhstan">Kazakhstan </option>
              <option value="Kenya">Kenya </option>
              <option value="Kirghizstan">Kirghizistan </option>
              <option value="Kiribati">Kiribati </option>
              <option value="Koweit">Koweit </option>

              <option value="Laos">Laos </option>
              <option value="Lesotho">Lesotho </option>
              <option value="Lettonie">Lettonie </option>
              <option value="Liban">Liban </option>
              <option value="Liberia">Liberia </option>
              <option value="Liechtenstein">Liechtenstein </option>
              <option value="Lituanie">Lituanie </option>
              <option value="Luxembourg">Luxembourg </option>
              <option value="Lybie">Lybie </option>

              <option value="Macao">Macao </option>
              <option value="Macedoine">Macedoine </option>
              <option value="Madagascar">Madagascar </option>
              <option value="Madère">Madère </option>
              <option value="Malaisie">Malaisie </option>
              <option value="Malawi">Malawi </option>
              <option value="Maldives">Maldives </option>
              <option value="Mali">Mali </option>
              <option value="Malte">Malte </option>
              <option value="Man">Man </option>
              <option value="Mariannes du Nord">Mariannes du Nord </option>
              <option value="Maroc">Maroc </option>
              <option value="Marshall">Marshall </option>
              <option value="Martinique">Martinique </option>
              <option value="Maurice">Maurice </option>
              <option value="Mauritanie">Mauritanie </option>
              <option value="Mayotte">Mayotte </option>
              <option value="Mexique">Mexique </option>
              <option value="Micronesie">Micronesie </option>
              <option value="Midway">Midway </option>
              <option value="Moldavie">Moldavie </option>
              <option value="Monaco">Monaco </option>
              <option value="Mongolie">Mongolie </option>
              <option value="Montserrat">Montserrat </option>
              <option value="Mozambique">Mozambique </option>

              <option value="Namibie">Namibie </option>
              <option value="Nauru">Nauru </option>
              <option value="Nepal">Nepal </option>
              <option value="Nicaragua">Nicaragua </option>
              <option value="Niger">Niger </option>
              <option value="Nigeria">Nigeria </option>
              <option value="Niue">Niue </option>
              <option value="Norfolk">Norfolk </option>
              <option value="Norvege">Norvege </option>
              <option value="Nouvelle_Caledonie">Nouvelle_Caledonie </option>
              <option value="Nouvelle_Zelande">Nouvelle_Zelande </option>

              <option value="Oman">Oman </option>
              <option value="Ouganda">Ouganda </option>
              <option value="Ouzbekistan">Ouzbekistan </option>

              <option value="Pakistan">Pakistan </option>
              <option value="Palau">Palau </option>
              <option value="Palestine">Palestine </option>
              <option value="Panama">Panama </option>
              <option value="Papouasie_Nouvelle_Guinee">
                Papouasie_Nouvelle_Guinee{" "}
              </option>
              <option value="Paraguay">Paraguay </option>
              <option value="Pays_Bas">Pays_Bas </option>
              <option value="Perou">Perou </option>
              <option value="Philippines">Philippines </option>
              <option value="Pologne">Pologne </option>
              <option value="Polynesie">Polynesie </option>
              <option value="Porto_Rico">Porto_Rico </option>
              <option value="Portugal">Portugal </option>

              <option value="Qatar">Qatar </option>

              <option value="Republique_Dominicaine">
                Republique_Dominicaine{" "}
              </option>
              <option value="Republique_Tcheque">Republique_Tcheque </option>
              <option value="Reunion">Reunion </option>
              <option value="Roumanie">Roumanie </option>
              <option value="Royaume_Uni">Royaume_Uni </option>
              <option value="Russie">Russie </option>
              <option value="Rwanda">Rwanda </option>

              <option value="Sahara Occidental">Sahara Occidental </option>
              <option value="Sainte_Lucie">Sainte_Lucie </option>
              <option value="Saint_Marin">Saint_Marin </option>
              <option value="Salomon">Salomon </option>
              <option value="Salvador">Salvador </option>
              <option value="Samoa_Occidentales">Samoa_Occidentales</option>
              <option value="Samoa_Americaine">Samoa_Americaine </option>
              <option value="Sao_Tome_et_Principe">
                Sao_Tome_et_Principe{" "}
              </option>
              <option value="Senegal">Senegal </option>
              <option value="Seychelles">Seychelles </option>
              <option value="Sierra Leone">Sierra Leone </option>
              <option value="Singapour">Singapour </option>
              <option value="Slovaquie">Slovaquie </option>
              <option value="Slovenie">Slovenie</option>
              <option value="Somalie">Somalie </option>
              <option value="Soudan">Soudan </option>
              <option value="Sri_Lanka">Sri_Lanka </option>
              <option value="Suede">Suede </option>
              <option value="Suisse">Suisse </option>
              <option value="Surinam">Surinam </option>
              <option value="Swaziland">Swaziland </option>
              <option value="Syrie">Syrie </option>

              <option value="Tadjikistan">Tadjikistan </option>
              <option value="Taiwan">Taiwan </option>
              <option value="Tonga">Tonga </option>
              <option value="Tanzanie">Tanzanie </option>
              <option value="Tchad">Tchad </option>
              <option value="Thailande">Thailande </option>
              <option value="Tibet">Tibet </option>
              <option value="Timor_Oriental">Timor_Oriental </option>
              <option value="Togo">Togo </option>
              <option value="Trinite_et_Tobago">Trinite_et_Tobago </option>
              <option value="Tristan da cunha">Tristan de cuncha </option>
              <option value="Tunisie">Tunisie </option>
              <option value="Turkmenistan">Turmenistan </option>
              <option value="Turquie">Turquie </option>

              <option value="Ukraine">Ukraine </option>
              <option value="Uruguay">Uruguay </option>

              <option value="Vanuatu">Vanuatu </option>
              <option value="Vatican">Vatican </option>
              <option value="Venezuela">Venezuela </option>
              <option value="Vierges_Americaines">Vierges_Americaines </option>
              <option value="Vierges_Britanniques">
                Vierges_Britanniques{" "}
              </option>
              <option value="Vietnam">Vietnam </option>

              <option value="Wake">Wake </option>
              <option value="Wallis et Futuma">Wallis et Futuma </option>

              <option value="Yemen">Yemen </option>
              <option value="Yougoslavie">Yougoslavie </option>

              <option value="Zambie">Zambie </option>
              <option value="Zimbabwe">Zimbabwe </option>
            </select>
            <input
              type="text"
              placeholder="Societe de travail"
              name="societe"
              onChange={handleChange}
              value={data.societe}
              required
              className={styles.input}
            />

            <input
              type="number"
              placeholder="Promotion"
              name="promotion"
              onChange={handleChange}
              value={data.promotion}
              required
              className={styles.input}
            />
            <input
              type="date"
              placeholder="date diplome"
              name="date_diplome"
              onChange={handleChange}
              value={data.date_diplome}
              required
              className={styles.input}
            />
            <input
              type="date"
              placeholder="date d embauche"
              name="date_embauche"
              onChange={handleChange}
              value={data.date_embauche}
              required
              className={styles.input}
            />
            {error && <div className={styles.error_msg}>{error}</div>}
            <button type="submit" className={styles.green_btn}>
              Envoyer
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Main;