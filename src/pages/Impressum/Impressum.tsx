import {
  DatenschutzContainer,
  TextBox,
  TextPstyled,
  TextSection,
  TextSubTitle,
  TextTitle,
} from './styles';

function Impressum() {
  return (
    <DatenschutzContainer>
      <TextSection>
        <TextTitle>Impressum</TextTitle>
        <TextSubTitle>Angaben gemäß § 5 TMG</TextSubTitle>
        <TextBox>
          <TextPstyled>Alina Soloshchenko </TextPstyled>
          <TextPstyled>Märchenweg 14, 21077 Hamburg Deutschland</TextPstyled>
          <TextPstyled>Tel.: +49 160 3212 983</TextPstyled>
          <TextPstyled>E-Mail: kontakt.bisnes@gmail.com</TextPstyled>
          <TextPstyled>Website: https://depilation.vercel.app/</TextPstyled>
        </TextBox>

        <TextSubTitle>Berufsbezeichnung / Tätigkeit</TextSubTitle>
        <TextBox>
          <TextPstyled>
            Kosmetische Dienstleistungen, Depilation, Schulungen und Online-Shop. Es handelt sich um
            ein Kleinunternehmen gemäß § 19 UStG.
          </TextPstyled>
        </TextBox>
        <TextBox>
          <TextSubTitle>Umsatzsteuer-ID</TextSubTitle>
          <TextSubTitle>47/233/03805</TextSubTitle>
        </TextBox>
        <TextSubTitle>Aufsichtsbehörde (sofern relevant)</TextSubTitle>
        <TextBox>
          <TextPstyled>
            Für kosmetische Dienstleistungen zuständig: Bezirksamt Hamburg-Harburg Fachamt
            Verbraucherschutz, Gewerbe und Umwelt
          </TextPstyled>
        </TextBox>
        <TextSubTitle>Verantwortlich für den Inhalt nach § 55 Abs. 2 RStV</TextSubTitle>
        <TextBox>
          <TextPstyled>Alina Soloshchenko</TextPstyled>
          <TextPstyled>Märchenweg 14 21077 Hamburg</TextPstyled>
        </TextBox>
        <TextSubTitle>EU-Streitschlichtung / Verbraucherstreitbeilegung</TextSubTitle>
        <TextBox>
          <TextPstyled>
            Die Europäische Kommission stellt eine Plattform zur Online-Streitbeilegung (OS) bereit:
          </TextPstyled>
          <TextPstyled>https://consumer-redress.ec.europa.eu/site-relocation_en</TextPstyled>
          <TextPstyled>
            Wir sind nicht verpflichtet und nicht bereit, an Streitbeilegungsverfahren vor einer
            Verbraucherschlichtungsstelle teilzunehmen.
          </TextPstyled>
        </TextBox>
        <TextSubTitle>Haftung für Inhalte</TextSubTitle>
        <TextBox>
          <TextPstyled>
            Als Diensteanbieter sind wir gemäß § 7 Abs. 1 TMG für eigene Inhalte verantwortlich.
          </TextPstyled>
          <TextPstyled>
            Für fremde Inhalte übernehmen wir keine Haftung gemäß §§ 8–10 TMG.
          </TextPstyled>
        </TextBox>
        <TextSubTitle>Haftung für Links</TextSubTitle>
        <TextBox>
          <TextPstyled>
            Unsere Website enthält Links zu externen Websites Dritter. Für deren Inhalte übernehmen
            wir keine Gewähr. Verantwortlich ist jeweils der Betreiber der verlinkten Seiten.
          </TextPstyled>
        </TextBox>
        <TextSubTitle>Urheberrecht</TextSubTitle>
        <TextBox>
          <TextPstyled>
            Alle Inhalte, Bilder und Texte auf dieser Website unterliegen dem deutschen
            Urheberrecht. Eine Nutzung ohne schriftliche Zustimmung ist nicht gestattet.
          </TextPstyled>
        </TextBox>
      </TextSection>
    </DatenschutzContainer>
  );
}
export default Impressum;
