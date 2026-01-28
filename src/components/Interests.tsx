const Interests = () => {
  return (
    <div className="min-h-150 h-full max-w-300 w-full mx-auto p-10 lg:p-20 flex flex-col justify-center items-center">
      <div id="interests-grid">
        <div className="box" style={{ gridArea: "a" }}>
          <img src="linguagens.png" alt="linguages" />
          <h3>Linguagens</h3>
          <p>
            Gosto de conhecer novos idiomas e culturas e sonho em viajar o mundo
            algum dia
          </p>
        </div>
        <div className="box" style={{ gridArea: "b" }}>
          <img src="filosofia_teologia.png" alt="filosofia_teologia" />
          <h3>Filosofia/Teologia</h3>
          <p>
            Estudo filosofia e teologia para pensar sobre sentido, ética e os
            fundamentos do conhecimento
          </p>
        </div>
        <div className="box" style={{ gridArea: "c" }}>
          <img
            src="programacao.png"
            alt="programacao"
            className="w-10/12 my-auto"
          />
          <h3>Programação</h3>
          <p>
            Uso programação para explorar ideias, testar hipóteses e resolver
            problemas reais. É a ferramenta que conecta quase tudo o que me
            interessa
          </p>
        </div>
        <div className="box" data-area="d" style={{ gridArea: "d" }}>
          <img
            src="cerebro.png"
            className="aspect-square w-full h-full"
            alt="cerebro"
          />
        </div>
        <div className="box p-1!" data-area="e" style={{ gridArea: "e" }}>
          <img src="homem.png" alt="homem" className="rounded-[34px] h-full" />
        </div>
        <div className="box" style={{ gridArea: "f" }}>
          <img src="matematica.png" alt="matematica" />
          <h3>Linguagens</h3>
          <p>
            Gosto de conhecer novos idiomas e culturas e sonho em viajar o mundo
            algum dia
          </p>
        </div>
        <div className="box" style={{ gridArea: "g" }}>
          <img src="mao_na_massa.png" alt="mao_na_massa" />
          <h3>Mão na Massa</h3>
          <p>
            Aprendo melhor quando estou construindo algo, errando e ajustando no
            processo
          </p>
        </div>
        <div className="box" style={{ gridArea: "h" }}>
          <img src="ciencia.png" alt="ciencia" />
          <h3>Ciência</h3>
          <p>
            Tenho interesse por diferentes áreas da ciência e gosto de entender
            os fundamentos antes de me aprofundar em uma especialidade
          </p>
        </div>
      </div>
    </div>
  );
};

export default Interests;
