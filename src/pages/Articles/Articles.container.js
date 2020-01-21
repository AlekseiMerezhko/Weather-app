import { connect } from "react-redux";
import { addArticle } from "../../actions/articlesAction";
import Articles from "./Articles.js";

export default connect(({ articles }) => articles, { addArticle })(Articles);
