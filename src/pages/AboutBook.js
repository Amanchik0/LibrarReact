import React from "react";
import AboutBookOld from "../components/AboutBookOld";

const AboutBook = () => {
  return <AboutBookOld />;
};

export default AboutBook;
{
  /* <div className="coments">
                <h3>Коментарий</h3>
                 if (user && user._id){ 
                <form onSubmit="sendRate(event)" className="add-coment-form">
                    <p>Оцените фильм</p>
                    <div className="coments-stars">
                        <img onclick="rateFilm(1)" src="/images/icons/star.svg" alt="">
                        <img onclick="rateFilm(2)" src="/images/icons/star.svg" alt="">
                        <img onclick="rateFilm(3)" src="/images/icons/star.svg" alt="">
                        <img onclick="rateFilm(4)" src="/images/icons/star.svg" alt="">
                        <img onclick="rateFilm(5)" src="/images/icons/star.svg" alt="">
                    </div>
                    
                    <p>Напишите коментарий</p>
                    <textarea id="coment-text" ></textarea>
                    <input type="hidden" value="<%=user._id%>" id="comment_author">
                    <input type="hidden" value="<%=film._id%>" id="comment_film">
                    <button type="submit"> Сохранить </button>
                </form>
                <%
                    }else { 
                %>
                <p>
                    <a href="/login">Войдите</a>
                    или
                    <a href="/register">Зарегистрируйтесь</a>, 
                    чтобы оставить коментарий
                </p>
                <%
                    }
                %>
                <%
                    if(rates){ 
                        rates.forEach(rate =>{ 
                %>
                    <div className="coment">
                        <p>Автор: <a href=""><%=rate.authorId.full_name%></a></p>
                        <div className="coments-stars">
                            <%
                                for(let i = 0 ; i < 5 ; i++ ){
                                    if(i<rate.rate){ 
                            %>
                                        <img class="active-stars" onclick="rateFilm(1)" src="/images/icons/star.svg" alt="">
                            <% 
                                }else { 
                            %>
                                <img src="/images/icons/star.svg" alt="">
                            <%  
                                    }}                               
                            %>
                            
                        </div>
                        <% if (rate.text.length > 0){ %>
                            <p>Коментарий: <%=rate.text%></p>
                        <%
                            }
                        %>
                    </div>            

                <%
                        })
                    }
                %> 
            </div> */
}
