const RefundsPage = () => {
  return (
    <div className="container section">
      <div className="max-w-4xl mx-auto">
        <h1 className="mb-8">Polityka Zwrotów</h1>
        
        <div className="prose prose-invert max-w-none space-y-6 text-muted-foreground">
          <p><strong>Data ostatniej aktualizacji:</strong> {new Date().toLocaleDateString('pl-PL')}</p>

          <h2 className="text-2xl font-semibold mt-8 mb-4">1. Informacje ogólne</h2>
          <p>
            Niniejsza Polityka Zwrotów określa zasady rezygnacji z usług świadczonych przez NazvaSSM oraz zasady zwrotu środków.
          </p>

          <h2 className="text-2xl font-semibold mt-8 mb-4">2. Prawo do rezygnacji</h2>
          <p>
            1. Klient ma prawo do rezygnacji z usług z zachowaniem okresu wypowiedzenia określonego w umowie (zazwyczaj 30 dni).
          </p>
          <p>
            2. W przypadku usług jednorazowych (np. tworzenie landing page), Klient może zrezygnować przed rozpoczęciem realizacji projektu.
          </p>

          <h2 className="text-2xl font-semibold mt-8 mb-4">3. Zwrot środków - usługi cykliczne</h2>
          <p>
            1. Dla usług rozliczanych miesięcznie:
          </p>
          <ul className="list-disc pl-6 space-y-2">
            <li>Rezygnacja możliwa z 30-dniowym wypowiedzeniem</li>
            <li>Nie przysługuje zwrot za rozpoczęty miesiąc rozliczeniowy</li>
            <li>Po okresie wypowiedzenia nie są naliczane kolejne opłaty</li>
          </ul>

          <h2 className="text-2xl font-semibold mt-8 mb-4">4. Zwrot środków - usługi jednorazowe</h2>
          <p>
            1. Dla projektów jednorazowych (landing pages, audyty):
          </p>
          <ul className="list-disc pl-6 space-y-2">
            <li>Pełny zwrot środków, jeśli projekt nie został rozpoczęty</li>
            <li>50% zwrotu, jeśli projekt jest w trakcie realizacji (do 50% zaawansowania)</li>
            <li>Brak zwrotu po ukończeniu i dostarczeniu projektu</li>
          </ul>

          <h2 className="text-2xl font-semibold mt-8 mb-4">5. Budżety reklamowe</h2>
          <p>
            Budżety reklamowe przekazane platformom (Google Ads, Meta Ads) nie podlegają zwrotowi, gdyż są wydatkowane bezpośrednio na tych platformach.
          </p>

          <h2 className="text-2xl font-semibold mt-8 mb-4">6. Procedura zwrotu</h2>
          <p>
            1. Zgłoszenie rezygnacji przez formularz kontaktowy lub email
          </p>
          <p>
            2. Potwierdzenie rezygnacji przez Agencję w ciągu 2 dni roboczych
          </p>
          <p>
            3. Zwrot środków (jeśli przysługuje) w ciągu 14 dni na rachunek bankowy Klienta
          </p>

          <h2 className="text-2xl font-semibold mt-8 mb-4">7. Kontakt</h2>
          <p>
            W sprawach dotyczących zwrotów prosimy o kontakt poprzez formularz kontaktowy na stronie.
          </p>
        </div>
      </div>
    </div>
  );
};

export default RefundsPage;
