import React from "react";
import "./RecognitionSection.css";

const RecognitionSection: React.FC = () => {
  return (
    <div className="recognition-card">
      <h2>Atividade Recente</h2>
      <ul>
        <li>
          <div
            className="avatar"
            style={{
              backgroundImage:
                "url('https://lh3.googleusercontent.com/aida-public/AB6AXuCaCHRtI0bJYAdE_3I_cphetqt9fxTsfvR2ax5DNyfIqLz_n9L-NAiVvx2fTGf2jT3_9Vmj21ijLJbfWBV3hgCXpAEtt4m5swOwnqd-448xzL9aa2YCVZw5ROc7axEGIzz1F2Xh0HjEaYBGNKLdj6p7PSXKtXXflVURdrUFqI0jb7lmtL2y6TJPOfcpNj5Dufq5aaHqhXSfBQymXtfQoK0LI2ENxaSvPCo0zXtW3Xs7WuE0E0p_Bgusi5ZJ2yrzDckk2SLbGdxK9dM')",
            }}
          ></div>
          <div>
            <p>
              <span className="name">Ricardo Alves</span> completou o
              treinamento de Liderança.
            </p>
            <span className="time">Há 2 horas</span>
          </div>
        </li>

        <li>
          <div
            className="avatar"
            style={{
              backgroundImage:
                "url('https://lh3.googleusercontent.com/aida-public/AB6AXuAPJ-UPqRxWfcjlBy-BvHl5jFpDYmTGU0vY9Y1CAKXh-f51LiP3605pruBvfhjL5CDTvPR6LoJlCn_fWTfWiC6BET97ue7T0GNnYQL1COh6zd8EUdP0ijzSi0k1KgQajImz_A01PoTq08jiyilvJCexQrQbfgkOXSIUofSrZYjQOwWO-c7sxTlPc4VdwYtDTlZPJypVrYTwvkkSzzQAIyCUXpshUERu5vVyBby43_ex5rCsWulUt9yVli8PcD7xMixSHH1WmL1SeQ0')",
            }}
          ></div>
          <div>
            <p>
              <span className="name">Juliana Costa</span> recebeu um elogio pelo
              projeto de marketing.
            </p>
            <span className="time">Ontem</span>
          </div>
        </li>
      </ul>
    </div>
  );
};

export default RecognitionSection;
