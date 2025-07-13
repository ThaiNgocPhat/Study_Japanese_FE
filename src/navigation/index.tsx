import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import type { RootStackParamList } from 'src/types/navigation'
import LoginScreen from '@screens/LoginScreen'
import RegisterScreen from '@screens/RegisterScreen'
import VerifyScreen from '@screens/VerifyScreen'
import ForgotPasswordScreen from '@screens/ForgotPasswordScreen'
import VerifyForgotPasswordScreen from '@screens/VerifyForgotPasswordScreen'
import ResetPasswordScreen from '@screens/ResetPasswordScreen'
import HomeScreen from '@screens/HomeScreen'
import KanaScreen from '@screens/KanaScreen'
import SelectVocabularyLevel from '@screens/SelectVocabularyLevel'
import SelectGrammarLevel from '@screens/SelectGrammarLevel'
import GrammarN5CategoryScreen from '@screens/grammar/GrammarN5CategoryScreen'
import GrammarVerbN5Screen from '@components/grammar/grammarN5/verb/GrammarVerbN5Screen'
import GrammarVerbN5TopicListScreen from '@components/grammar/grammarN5/verb/GrammarVerbN5TopicListScreen'
import GrammarVerbMasuScreen from '@components/grammar/grammarN5/verb/GrammarVerbMasuScreen'
import GrammarVerbTaFormScreen from '@components/grammar/grammarN5/verb/GrammarVerbTaFormScreen'
import GrammarTeFormScreen from '@components/grammar/grammarN5/verb/GrammarTeFormScreen'
import GrammarMasenkaMashouScreen from '@components/grammar/grammarN5/verb/GrammarMasenkaMashouScreen'
import GrammarTaKotoGaAruScreen from '@components/grammar/grammarN5/verb/GrammarTaKotoGaAruScreen'
import GrammarTariTariSuruScreen from '@components/grammar/grammarN5/verb/GrammarTariTariSuruScreen'
import GrammarAgeruMorauKureruScreen from '@components/grammar/grammarN5/verb/GrammarAgeruMorauKureruScreen'
import GrammarGaArimasuScreen from '@components/grammar/grammarN5/verb/GrammarGaArimasuScreen'
import GrammarNaideKudasaiScreen from '@components/grammar/grammarN5/verb/GrammarNaideKudasaiScreen'
import GrammarNakerebaNaranaiScreen from '@components/grammar/grammarN5/verb/GrammarNakerebaNaranaiScreen'
import GrammarNakerebaIkenaiScreen from '@components/grammar/grammarN5/verb/GrammarNakerebaIkenaiScreen'
import GrammarNakutemoIiScreen from '@components/grammar/grammarN5/verb/GrammarNakutemoIiScreen'
import GrammarAdjectiveN5TopicListScreen from '@components/grammar/grammarN5/adjective/GrammarAdjectiveN5TopicListScreen'
import GrammarAdjectiveBasicScreen from '@components/grammar/grammarN5/adjective/GrammarAdjectiveBasicScreen'
import GrammarAdjectiveWithNounVerbScreen from '@components/grammar/grammarN5/adjective/GrammarAdjectiveWithNounVerbScreen'
import GrammarAdjectiveNaruScreen from '@components/grammar/grammarN5/adjective/GrammarAdjectiveNaruScreen'
import GrammarTaiDesuScreen from '@components/grammar/grammarN5/adjective/GrammarTaiDesuScreen'
import GrammarGaHoshiiDesuScreen from '@components/grammar/grammarN5/adjective/GrammarGaHoshiiDesuScreen'
import GrammarGaSukiDesuScreen from '@components/grammar/grammarN5/adjective/GrammarGaSukiDesuScreen'
import GrammarGaJouzuHetaDesuScreen from '@components/grammar/grammarN5/adjective/GrammarGaJouzuHetaDesuScreen'
import GrammarNounN5TopicListScreen from '@components/grammar/grammarN5/noun/GrammarNounN5TopicListScreen'
import GrammarNounBasicScreen from '@components/grammar/grammarN5/noun/GrammarNounBasicScreen'
import GrammarCountingPeopleThingScreen from '@components/grammar/grammarN5/noun/GrammarCountingPeopleThingScreen'
import GrammarDateDayMonthScreen from '@components/grammar/grammarN5/noun/GrammarDateDayMonthScreen'
import GrammarVerbModifyNounScreen from '@components/grammar/grammarN5/noun/GrammarVerbModifyNounScreen'
import GrammarParticleN5TopicListScreen from '@components/grammar/grammarN5/particle/GrammarParticleN5TopicListScreen'
import GrammarParticlesOverviewScreen from '@components/grammar/grammarN5/particle/GrammarParticlesOverviewScreen'
import GrammarParticleNiDeScreen from '@components/grammar/grammarN5/particle/GrammarParticleNiDeScreen'
import GrammarGaKedoScreen from '@components/grammar/grammarN5/particle/GrammarGaKedoScreen'
import OtherSentencePatternsScreen from '@components/grammar/grammarN5/other-patterns/OtherSentencePatternsScreen'
import GrammarKoSoADoScreen from '@components/grammar/grammarN5/other-patterns/GrammarKoSoADoScreen'
import GrammarYoriNoHougaScreen from '@components/grammar/grammarN5/other-patterns/GrammarYoriNoHougaScreen'
import GrammarIchibanComparisonScreen from '@components/grammar/grammarN5/other-patterns/GrammarIchibanComparisonScreen'
import GrammarMaeAtoScreen from '@components/grammar/grammarN5/other-patterns/GrammarMaeAtoScreen'
import GrammarDakeShikaScreen from '@components/grammar/grammarN5/other-patterns/GrammarDakeShikaScreen'
import GrammarNodeKaraScreen from '@components/grammar/grammarN5/other-patterns/GrammarNodeKaraScreen'
import GrammarDeshouScreen from '@components/grammar/grammarN5/other-patterns/GrammarDeshouScreen'
import GrammarAdverbsNegativeScreen from '@components/grammar/grammarN5/other-patterns/GrammarAdverbsNegativeScreen'
import GrammarQuestionWordsScreen from '@components/grammar/grammarN5/other-patterns/GrammarQuestionWordsScreen'
import GrammarN4CategoryScreen from '@screens/grammar/GrammarN4CategoryScreen'
import GrammarNdesuScreen from '@components/grammar/grammarN4/GrammarNdesuScreen'
import GrammarHougaiiScreen from '@components/grammar/grammarN4/GrammarHougaiiScreen'
import GrammarNoniScreen from '@components/grammar/grammarN4/GrammarNoniScreen'
import GrammarNagaraScreen from '@components/grammar/grammarN4/GrammarNagaraScreen'
import GrammarNoGaNoHaNoNiScreen from '@components/grammar/grammarN4/GrammarNoGaNoHaNoNiScreen'
import GrammarKanoukeiScreen from '@components/grammar/grammarN4/GrammarKanoukeiScreen'
import GrammarKotoGaDekiruScreen from '@components/grammar/grammarN4/GrammarKotoGaDekiruScreen'
import GrammarKataScreen from '@components/grammar/grammarN4/GrammarKataScreen'
import GrammarTooriniScreen from '@components/grammar/grammarN4/GrammarTooriniScreen'
import GrammarIshikeiScreen from '@components/grammar/grammarN4/GrammarIshikeiScreen'
import GrammarYouToOmoimasuScreen from '@components/grammar/grammarN4/GrammarYouToOmoimasuScreen'
import GrammarYouninaruScreen from '@components/grammar/grammarN4/GrammarYouninaruScreen'
import GrammarYouniSuruScreen from '@components/grammar/grammarN4/GrammarYouniSuruScreen'
import GrammarTsumoriScreen from '@components/grammar/grammarN4/GrammarTsumoriScreen'
import GrammarYoteiScreen from '@components/grammar/grammarN4/GrammarYoteiScreen'
import GrammarToUsageScreen from '@components/grammar/grammarN4/GrammarToUsageScreen'
import GrammarJidouTadoushiScreen from '@components/grammar/grammarN4/GrammarJidouTadoushiScreen'
import GrammarBaScreen from '@components/grammar/grammarN4/GrammarBaScreen'
import GrammarTaraScreen from '@components/grammar/grammarN4/GrammarTaraScreen'
import GrammarToScreen from '@components/grammar/grammarN4/GrammarToScreen'
import GrammarNaraScreen from '@components/grammar/grammarN4/GrammarNaraScreen'
import GrammarBaaiScreen from '@components/grammar/grammarN4/GrammarBaaiScreen'
import GrammarTokiScreen from '@components/grammar/grammarN4/GrammarTokiScreen'
import GrammarYouMitaiScreen from '@components/grammar/grammarN4/GrammarYouMitaiScreen'
import GrammarSouDesuScreen from '@components/grammar/grammarN4/GrammarSouDesuScreen'
import GrammarRashiiScreen from '@components/grammar/grammarN4/GrammarRashiiScreen'
import GrammarComparisonScreen from '@components/grammar/grammarN4/GrammarComparisonScreen'
import GrammarNiWaScreen from '@components/grammar/grammarN4/GrammarNiWaScreen'
import GrammarNiSuruScreen from '@components/grammar/grammarN4/GrammarNiSuruScreen'
import GrammarAdjectiveSuruScreen from '@components/grammar/grammarN4/GrammarAdjectiveSuruScreen'
import GrammarMouMadaScreen from '@components/grammar/grammarN4/GrammarMouMadaScreen'
import GrammarTameniYouniScreen from '@components/grammar/grammarN4/GrammarTameniYouniScreen'
import GrammarFukugouDoushiScreen from '@components/grammar/grammarN4/GrammarFukugouDoushiScreen'
import GrammarSugiruScreen from '@components/grammar/grammarN4/GrammarSugiruScreen'
import GrammarYasuiNIkuiScreen from '@components/grammar/grammarN4/GrammarYasuiNIkuiScreen'
import GrammarUkemiScreen from '@components/grammar/grammarN4/GrammarUkemiScreen'
import GrammarShiekikeiScreen from '@components/grammar/grammarN4/GrammarShiekikeiScreen'
import GrammarMeireikeiScreen from '@components/grammar/grammarN4/GrammarMeireikeiScreen'
import GrammarTeAgeruKureruMorauScreen from '@components/grammar/grammarN4/GrammarTeAgeruKureruMorauScreen'
import GrammarTeShimauScreen from '@components/grammar/grammarN4/GrammarTeShimauScreen'
import GrammarTeAruScreen from '@components/grammar/grammarN4/GrammarTeAruScreen'
import GrammarTeOkuScreen from '@components/grammar/grammarN4/GrammarTeOkuScreen'
import GrammarKamoshiremasenHasuScreen from '@components/grammar/grammarN4/GrammarKamoshiremasenHasuScreen'
import GrammarTeMiruScreen from '@components/grammar/grammarN4/GrammarTeMiruScreen'
import GrammarTaraIiDesuKaScreen from '@components/grammar/grammarN4/GrammarTaraIiDesuKaScreen'
import GrammarTeItadakemasenScreen from '@components/grammar/grammarN4/GrammarTeItadakemasenScreen'
import GrammarKaKaDoukaScreen from '@components/grammar/grammarN4/GrammarKaKaDoukaScreen'
import GrammarKeigoScreen from '@components/grammar/grammarN4/GrammarKeigoScreen'
import GrammarShiScreen from '@components/grammar/grammarN4/GrammarShiScreen'
import GrammarNaitoNakuchaScreen from '@components/grammar/grammarN3/GrammarNaitoNakuchaScreen'
import GrammarN3CategoryScreen from '@screens/grammar/GrammarN3CategoryScreen'
import GrammarChauScreen from '@components/grammar/grammarN3/GrammarChauScreen'
import GrammarTokuScreen from '@components/grammar/grammarN3/GrammarTokuScreen'
import GrammarMitaiRashiiPpoiScreen from '@components/grammar/grammarN3/GrammarMitaiRashiiPpoiScreen'
import GrammarMarudeYouMitaiScreen from '@components/grammar/grammarN3/GrammarMarudeYouMitaiScreen'
import GrammarYouniYounaScreen from '@components/grammar/grammarN3/GrammarYouniYounaScreen'
import GrammarYouToSuruScreen from '@components/grammar/grammarN3/GrammarYouToSuruScreen'
import GrammarBaTaraToIiScreen from '@components/grammar/grammarN3/GrammarBaTaraToIiScreen'
import GrammarBakariScreen from '@components/grammar/grammarN3/GrammarBakariScreen'
import GrammarSaeScreen from '@components/grammar/grammarN3/GrammarSaeScreen'
import GrammarSaeBaScreen from '@components/grammar/grammarN3/GrammarSaeBaScreen'
import GrammarKosoScreen from '@components/grammar/grammarN3/GrammarKosoScreen'
import GrammarTokoroDesuScreen from '@components/grammar/grammarN3/GrammarTokoroDesuScreen'
import GrammarBekidaScreen from '@components/grammar/grammarN3/GrammarBekidaScreen'
import GrammarTeShouganaiScreen from '@components/grammar/grammarN3/GrammarTeShouganaiScreen'
import GrammarTamaranaideScreen from '@components/grammar/grammarN3/GrammarTamaranaideScreen'
import GrammarTsumoriDattanoniScreen from '@components/grammar/grammarN3/GrammarTsumoriDattanoniScreen'
import GrammarTameNiScreen from '@components/grammar/grammarN3/GrammarTameNiScreen'
import GrammarGaruScreen from '@components/grammar/grammarN3/GrammarGaruScreen'
import GrammarTeHoshiiScreen from '@components/grammar/grammarN3/GrammarTeHoshiiScreen'
import GrammarUchiNiScreen from '@components/grammar/grammarN3/GrammarUchiNiScreen'
import GrammarAidaAidaNiScreen from '@components/grammar/grammarN3/GrammarAidaAidaNiScreen'
import GrammarTabiNiScreen from '@components/grammar/grammarN3/GrammarTabiNiScreen'
import GrammarSaichuuNiScreen from '@components/grammar/grammarN3/GrammarSaichuuNiScreen'
import GrammarKaraNiKaketeScreen from '@components/grammar/grammarN3/GrammarKaraNiKaketeScreen'
import GrammarToIuKotoScreen from '@components/grammar/grammarN3/GrammarToIuKotoScreen'
import GrammarKanaScreen from '@components/grammar/grammarN3/GrammarKanaScreen'
import GrammarWakeDaScreen from '@components/grammar/grammarN3/GrammarWakeDaScreen'
import GrammarWakeJanaiScreen from '@components/grammar/grammarN3/GrammarWakeJanaiScreen'
import GrammarWakeNiWaIkanaiScreen from '@components/grammar/grammarN3/GrammarWakeNiWaIkanaiScreen'
import GrammarMonoMonScreen from '@components/grammar/grammarN3/GrammarMonoMonScreen'
import GrammarOkageDeScreen from '@components/grammar/grammarN3/GrammarOkageDeScreen'
import GrammarNiChigaiNaiScreen from '@components/grammar/grammarN3/GrammarNiChigaiNaiScreen'
import GrammarTteUsageScreen from '@components/grammar/grammarN3/GrammarTteUsageScreen'
import GrammarNankaNanteScreen from '@components/grammar/grammarN3/GrammarNankaNanteScreen'
import GrammarKawariniScreen from '@components/grammar/grammarN3/GrammarKawariniScreen'
import GrammarUeNiScreen from '@components/grammar/grammarN3/GrammarUeNiScreen'
import GrammarNiKuwaeteScreen from '@components/grammar/grammarN3/GrammarNiKuwaeteScreen'
import GrammarKotoGaAruScreen from '@components/grammar/grammarN3/GrammarKotoGaAruScreen'
import GrammarOsoreGaAruScreen from '@components/grammar/grammarN3/GrammarOsoreGaAruScreen'
import GrammarNiKimatteIruScreen from '@components/grammar/grammarN3/GrammarNiKimatteIruScreen'
import GrammarNiYotteScreen from '@components/grammar/grammarN3/GrammarNiYotteScreen'
import GrammarToIuPatternsScreen from '@components/grammar/grammarN3/GrammarToIuPatternsScreen'
import GrammarMonokaScreen from '@components/grammar/grammarN3/GrammarMonokaScreen'
import GrammarDonnaniKotoKaScreen from '@components/grammar/grammarN3/GrammarDonnaniKotoKaScreen'
import GrammarToshiteScreen from '@components/grammar/grammarN3/GrammarToshiteScreen'
import GrammarBaToOmouScreen from '@components/grammar/grammarN3/GrammarBaToOmouScreen'
import GrammarN2CategoryScreen from '@screens/grammar/GrammarN2CategoryScreen'
import GrammarConditionScreen from '@components/grammar/grammarN2/grammar-condition/GrammarConditionScreen'
import GrammarBakarikaScreen from '@components/grammar/grammarN2/grammar-condition/GrammarBakarikaScreen'
import GrammarBaHodoScreen from '@components/grammar/grammarN2/grammar-condition/GrammarBaHodoScreen'
import GrammarMonoNaraScreen from '@components/grammar/grammarN2/grammar-condition/GrammarMonoNaraScreen'
import GrammarToshitaraScreen from '@components/grammar/grammarN2/grammar-condition/GrammarToshitaraScreen'
import GrammarNaiKotoNiwaScreen from '@components/grammar/grammarN2/grammar-condition/GrammarNaiKotoNiwaScreen'
import GrammarTatokorodeScreen from '@components/grammar/grammarN2/grammar-condition/GrammarTatokorodeScreen'
import GrammarMononoScreen from '@components/grammar/grammarN2/grammar-condition/GrammarMononoScreen'
import GrammarNagaraMoScreen from '@components/grammar/grammarN2/grammar-condition/GrammarNagaraMoScreen'
import GrammarNishitewaScreen from '@components/grammar/grammarN2/grammar-condition/GrammarNishitewaScreen'
import GrammarToIttemoScreen from '@components/grammar/grammarN2/grammar-condition/GrammarToIttemoScreen'
import GrammarReasonScreen from '@components/grammar/grammarN2/grammar-reason/GrammarReasonScreen'
import GrammarAdviceScreen from '@components/grammar/grammarN2/grammar-advice/GrammarAdviceScreen'
import GrammarChangeScreen from '@components/grammar/grammarN2/grammar-change/GrammarChangeScreen'
import GrammarPurposeScreen from '@components/grammar/grammarN2/grammar-purpose/GrammarPurposeScreen'
import GrammarContrastScreen from '@components/grammar/grammarN2/grammar-contrast/GrammarContrastScreen'
import GrammarEmphasisScreen from '@components/grammar/grammarN2/grammar-emphasis/GrammarEmphasisScreen'
import GrammarGuessScreen from '@components/grammar/grammarN2/grammar-guess/GrammarGuessScreen'
import GrammarLimitScreen from '@components/grammar/grammarN2/grammar-limit/GrammarLimitScreen'
import GrammarStateScreen from '@components/grammar/grammarN2/grammar-state/GrammarStateScreen'
import GrammarTimeScreen from '@components/grammar/grammarN2/grammar-time/GrammarTimeScreen'
import GrammarPassiveScreen from '@components/grammar/grammarN2/grammar-passive/GrammarPassiveScreen'
import GrammarNegativeScreen from '@components/grammar/grammarN2/grammar-negative/GrammarNegativeScreen'
import GrammarSpecialScreen from '@components/grammar/grammarN2/grammar-special/GrammarSpecialScreen'
import GrammarOkagedeScreen from '@components/grammar/grammarN2/grammar-reason/GrammarOkagedeScreen'
import GrammarSeideScreen from '@components/grammar/grammarN2/grammar-reason/GrammarSeideScreen'
import GrammarAmariScreen from '@components/grammar/grammarN2/grammar-reason/GrammarAmariScreen'
import GrammarMonoDakaraScreen from '@components/grammar/grammarN2/grammar-reason/GrammarMonoDakaraScreen'
import GrammarKotoDashiScreen from '@components/grammar/grammarN2/grammar-reason/GrammarKotoDashiScreen'
import GrammarDakeNiScreen from '@components/grammar/grammarN2/grammar-reason/GrammarDakeNiScreen'
import GrammarBakariniScreen from '@components/grammar/grammarN2/grammar-reason/GrammarBakariniScreen'
import GrammarKaraNiwaijouScreen from '@components/grammar/grammarN2/grammar-reason/GrammarKaraNiwaijouScreen'
import GrammarUewaScreen from '@components/grammar/grammarN2/grammar-reason/GrammarUewaScreen'
import GrammarTameniScreen from '@components/grammar/grammarN2/grammar-purpose/GrammarTameniScreen'
import GrammarYouniScreen from '@components/grammar/grammarN2/grammar-purpose/GrammarYouniScreen'
import GrammarNiOujiteScreen from '@components/grammar/grammarN2/grammar-purpose/GrammarNiOujiteScreen'
import GrammarNiSotteScreen from '@components/grammar/grammarN2/grammar-purpose/GrammarNiSotteScreen'
import GrammarNiwatatteScreen from '@components/grammar/grammarN2/grammar-purpose/GrammarNiwatatteScreen'
import GrammarWoTsuujiteScreen from '@components/grammar/grammarN2/grammar-purpose/GrammarWoTsuujiteScreen'
import GrammarSueniScreen from '@components/grammar/grammarN2/grammar-purpose/GrammarSueniScreen'
import GrammarAgekuScreen from '@components/grammar/grammarN2/grammar-purpose/GrammarAgekuScreen'
import GrammarIppouScreen from '@components/grammar/grammarN2/grammar-contrast/GrammarIppouScreen'
import GrammarHanmenScreen from '@components/grammar/grammarN2/grammar-contrast/GrammarHanmenScreen'
import GrammarKawariniN2Screen from '@components/grammar/grammarN2/grammar-contrast/GrammarKawariniN2Screen'
import GrammarKuseniScreen from '@components/grammar/grammarN2/grammar-contrast/GrammarKuseniScreen'
import GrammarToIuYoriScreen from '@components/grammar/grammarN2/grammar-contrast/GrammarToIuYoriScreen'
import GrammarWariniScreen from '@components/grammar/grammarN2/grammar-contrast/GrammarWariniScreen'
import GrammarNishitemoScreen from '@components/grammar/grammarN2/grammar-contrast/GrammarNishitemoScreen'
import GrammarBakarikaN2Screen from '@components/grammar/grammarN2/grammar-emphasis/GrammarBakarikaN2Screen'
import GrammarNominarazuScreen from '@components/grammar/grammarN2/grammar-emphasis/GrammarNominarazuScreen'
import GrammarWaMochironScreen from '@components/grammar/grammarN2/grammar-emphasis/GrammarWaMochironScreen'
import GrammarNiKagirazuScreen from '@components/grammar/grammarN2/grammar-emphasis/GrammarNiKagirazuScreen'
import GrammarNiKakawarazuScreen from '@components/grammar/grammarN2/grammar-emphasis/GrammarNiKakawarazuScreen'
import GrammarNishitewaN2Screen from '@components/grammar/grammarN2/grammar-emphasis/GrammarNishitewaN2Screen'
import GrammarNiChigainaiScreen from '@components/grammar/grammarN2/grammar-guess/GrammarNiChigainaiScreen'
import GrammarNiSouinaiScreen from '@components/grammar/grammarN2/grammar-guess/GrammarNiSouinaiScreen'
import GrammarNikimatteiruScreen from '@components/grammar/grammarN2/grammar-guess/GrammarNikimatteiruScreen'
import GrammarRashiiN2Screen from '@components/grammar/grammarN2/grammar-guess/GrammarRashiiN2Screen'
import GrammarPpoiScreen from '@components/grammar/grammarN2/grammar-guess/GrammarPpoiScreen'
import GrammarYounaKigasureScreen from '@components/grammar/grammarN2/grammar-guess/GrammarYounaKigasureScreen'
import GrammarKanoyoudaScreen from '@components/grammar/grammarN2/grammar-guess/GrammarKanoyoudaScreen'
import GrammarWakeganaiScreen from '@components/grammar/grammarN2/grammar-guess/GrammarWakeganaiScreen'
import GrammarHazuganaiScreen from '@components/grammar/grammarN2/grammar-guess/GrammarHazuganaiScreen'
import GrammarTowaKagiranaiScreen from '@components/grammar/grammarN2/grammar-guess/GrammarTowaKagiranaiScreen'
import GrammarBekidaN2Screen from '@components/grammar/grammarN2/grammar-advice/GrammarBekidaN2Screen'
import GrammarKotoDaScreen from '@components/grammar/grammarN2/grammar-advice/GrammarKotoDaScreen'
import GrammarMonoDaScreen from '@components/grammar/grammarN2/grammar-advice/GrammarMonoDaScreen'
import GrammarNaiMonokaScreen from '@components/grammar/grammarN2/grammar-advice/GrammarNaiMonokaScreen'
import GrammarKotoWaNaiScreen from '@components/grammar/grammarN2/grammar-advice/GrammarKotoWaNaiScreen'
import GrammarTamonodaScreen from '@components/grammar/grammarN2/grammar-advice/GrammarTamonodaScreen'
import GrammarNiTsureteScreen from '@components/grammar/grammarN2/grammar-change/GrammarNiTsureteScreen'
import GrammarNiShitagatteScreen from '@components/grammar/grammarN2/grammar-change/GrammarNiShitagatteScreen'
import GrammarToTomoniScreen from '@components/grammar/grammarN2/grammar-change/GrammarToTomoniScreen'
import GrammarNiTomonatteScreen from '@components/grammar/grammarN2/grammar-change/GrammarNiTomonatteScreen'
import GrammarShidaiDaScreen from '@components/grammar/grammarN2/grammar-change/GrammarShidaiDaScreen'
import GrammarNiKagiriScreen from '@components/grammar/grammarN2/grammar-limit/GrammarNiKagiriScreen'
import GrammarNiKagirazuN2Screen from '@components/grammar/grammarN2/grammar-limit/GrammarNiKagirazuN2Screen'
import GrammarDakeScreen from '@components/grammar/grammarN2/grammar-limit/GrammarDakeScreen'
import GrammarNiHokaNaranaiScreen from '@components/grammar/grammarN2/grammar-limit/GrammarNiHokaNaranaiScreen'
import GrammarNiSuginaiScreen from '@components/grammar/grammarN2/grammar-limit/GrammarNiSuginaiScreen'
import GrammarToIuMonodaScreen from '@components/grammar/grammarN2/grammar-limit/GrammarToIuMonodaScreen'
import GrammarNishitemoNishitemoScreen from '@components/grammar/grammarN2/grammar-negative/GrammarNishitemoNishitemoScreen'
import GrammarNishiroNishiroScreen from '@components/grammar/grammarN2/grammar-negative/GrammarNishiroNishiroScreen'
import GrammarNiseyoNiseyoScreen from '@components/grammar/grammarN2/grammar-negative/GrammarNiseyoNiseyoScreen'
import GrammarDonnaniKotoKaN2Screen from '@components/grammar/grammarN2/grammar-negative/GrammarDonnaniKotoKaN2Screen'
import GrammarIkuraTemoScreen from '@components/grammar/grammarN2/grammar-negative/GrammarIkuraTemoScreen'
import GrammarToshitemoScreen from '@components/grammar/grammarN2/grammar-negative/GrammarToshitemoScreen'
import GrammarSaserareruScreen from '@components/grammar/grammarN2/grammar-passive/GrammarSaserareruScreen'
import GrammarRareruScreen from '@components/grammar/grammarN2/grammar-passive/GrammarRareruScreen'
import GrammarTeShouganaiN2Screen from '@components/grammar/grammarN2/grammar-passive/GrammarTeShouganaiN2Screen'
import GrammarTeTamaranaScreen from '@components/grammar/grammarN2/grammar-passive/GrammarTeTamaranaScreen'
import GrammarTeNaranaiScreen from '@components/grammar/grammarN2/grammar-passive/GrammarTeNaranaiScreen'
import GrammarNaiDeWaIrarenaiScreen from '@components/grammar/grammarN2/grammar-passive/GrammarNaiDeWaIrarenaiScreen'
import GrammarZuNiwaIrarenaiScreen from '@components/grammar/grammarN2/grammar-passive/GrammarZuNiwaIrarenaiScreen'
import GrammarToIutoScreen from '@components/grammar/grammarN2/grammar-special/GrammarToIutoScreen'
import GrammarToIeBaScreen from '@components/grammar/grammarN2/grammar-special/GrammarToIeBaScreen'
import GrammarToIuttaraScreen from '@components/grammar/grammarN2/grammar-special/GrammarToIuttaraScreen'
import GrammarNiOiteScreen from '@components/grammar/grammarN2/grammar-special/GrammarNiOiteScreen'
import GrammarWoTowazuScreen from '@components/grammar/grammarN2/grammar-special/GrammarWoTowazuScreen'
import GrammarWoMegutteScreen from '@components/grammar/grammarN2/grammar-special/GrammarWoMegutteScreen'
import GrammarNiSaishiteScreen from '@components/grammar/grammarN2/grammar-special/GrammarNiSaishiteScreen'
import GrammarNiAtatteScreen from '@components/grammar/grammarN2/grammar-special/GrammarNiAtatteScreen'
import GrammarKaneruScreen from '@components/grammar/grammarN2/grammar-special/GrammarKaneruScreen'
import GrammarKanenaiScreen from '@components/grammar/grammarN2/grammar-special/GrammarKanenaiScreen'
import GrammarTeIraiScreen from '@components/grammar/grammarN2/grammar-special/GrammarTeIraiScreen'
import GrammarShidaiDeScreen from '@components/grammar/grammarN2/grammar-special/GrammarShidaiDeScreen'
import GrammarTebakariIruScreen from '@components/grammar/grammarN2/grammar-state/GrammarTebakariIruScreen'
import GrammarPpanashiScreen from '@components/grammar/grammarN2/grammar-state/GrammarPpanashiScreen'
import GrammarGachiScreen from '@components/grammar/grammarN2/grammar-state/GrammarGachiScreen'
import GrammarKimiScreen from '@components/grammar/grammarN2/grammar-state/GrammarKimiScreen'
import GrammarKakeScreen from '@components/grammar/grammarN2/grammar-state/GrammarKakeScreen'
import GrammarSaichuuNiN2Screen from '@components/grammar/grammarN2/grammar-time/GrammarSaichuuNiN2Screen'
import GrammarUchiNiN2Screen from '@components/grammar/grammarN2/grammar-time/GrammarUchiNiN2Screen'
import GrammarTokoroNiScreen from '@components/grammar/grammarN2/grammar-time/GrammarTokoroNiScreen'
import GrammarTatoTanscreen from '@components/grammar/grammarN2/grammar-time/GrammarTatoTanscreen'
import GrammarKaToOmoutoScreen from '@components/grammar/grammarN2/grammar-time/GrammarKaToOmoutoScreen'
import GrammarKaNaiKaScreen from '@components/grammar/grammarN2/grammar-time/GrammarKaNaiKaScreen'
import SelectKanjiLevel from '@screens/SelectKanjiLevel'
import KanjiN5Screen from '@screens/kanji/KanjiN5Screen'
import KanjiN4Screen from '@screens/kanji/KanjiN4Screen'
import KanjiN3Screen from '@screens/kanji/KanjiN3Screen'
import KanjiN2Screen from '@screens/kanji/KanjiN2Screen'
const Stack = createNativeStackNavigator<RootStackParamList>()

interface RoutersProps {
  initialRouteName: keyof RootStackParamList
}

const screens: {
  name: keyof RootStackParamList
  component: React.ComponentType<any>
}[] = [
  { name: 'Login', component: LoginScreen },
  { name: 'Register', component: RegisterScreen },
  { name: 'Verify', component: VerifyScreen },
  { name: 'Home', component: HomeScreen },
  { name: 'ForgotPassword', component: ForgotPasswordScreen },
  { name: 'VerifyForgotPassword', component: VerifyForgotPasswordScreen },
  { name: 'ResetPassword', component: ResetPasswordScreen },
  { name: 'SelectVocabularyLevel', component: SelectVocabularyLevel },
  { name: 'KanaScreen', component: KanaScreen },
  { name: 'SelectGrammarLevel', component: SelectGrammarLevel },
  { name: 'GrammarN5CategoryScreen', component: GrammarN5CategoryScreen },
  { name: 'GrammarVerbN5Screen', component: GrammarVerbN5Screen },
  { name: 'GrammarVerbN5TopicListScreen', component: GrammarVerbN5TopicListScreen },
  { name: 'GrammarVerbMasuScreen', component: GrammarVerbMasuScreen },
  { name: 'GrammarTariTariSuruScreen', component: GrammarTariTariSuruScreen },
  { name: 'GrammarVerbTaFormScreen', component: GrammarVerbTaFormScreen },
  { name: 'GrammarTeFormScreen', component: GrammarTeFormScreen },
  { name: 'GrammarMasenkaMashouScreen', component: GrammarMasenkaMashouScreen },
  { name: 'GrammarTaKotoGaAruScreen', component: GrammarTaKotoGaAruScreen },
  { name: 'GrammarAgeruMorauKureruScreen', component: GrammarAgeruMorauKureruScreen },
  { name: 'GrammarGaArimasuScreen', component: GrammarGaArimasuScreen },
  { name: 'GrammarNaideKudasaiScreen', component: GrammarNaideKudasaiScreen },
  { name: 'GrammarNakerebaNaranaiScreen', component: GrammarNakerebaNaranaiScreen },
  { name: 'GrammarNakerebaIkenaiScreen', component: GrammarNakerebaIkenaiScreen },
  { name: 'GrammarNakutemoIiScreen', component: GrammarNakutemoIiScreen },
  { name: 'GrammarAdjectiveN5TopicListScreen', component: GrammarAdjectiveN5TopicListScreen },
  { name: 'GrammarAdjectiveBasicScreen', component: GrammarAdjectiveBasicScreen },
  { name: 'GrammarAdjectiveWithNounVerbScreen', component: GrammarAdjectiveWithNounVerbScreen },
  { name: 'GrammarAdjectiveNaruScreen', component: GrammarAdjectiveNaruScreen },
  { name: 'GrammarTaiDesuScreen', component: GrammarTaiDesuScreen },
  { name: 'GrammarGaHoshiiDesuScreen', component: GrammarGaHoshiiDesuScreen },
  { name: 'GrammarGaSukiDesuScreen', component: GrammarGaSukiDesuScreen },
  { name: 'GrammarGaJouzuHetaDesuScreen', component: GrammarGaJouzuHetaDesuScreen },
  { name: 'GrammarNounN5TopicListScreen', component: GrammarNounN5TopicListScreen },
  { name: 'GrammarNounBasicScreen', component: GrammarNounBasicScreen },
  { name: 'GrammarCountingPeopleThingScreen', component: GrammarCountingPeopleThingScreen },
  { name: 'GrammarDateDayMonthScreen', component: GrammarDateDayMonthScreen },
  { name: 'GrammarVerbModifyNounScreen', component: GrammarVerbModifyNounScreen },
  { name: 'GrammarParticleN5TopicListScreen', component: GrammarParticleN5TopicListScreen },
  { name: 'GrammarParticlesOverviewScreen', component: GrammarParticlesOverviewScreen },
  { name: 'GrammarParticleNiDeScreen', component: GrammarParticleNiDeScreen },
  { name: 'GrammarGaKedoScreen', component: GrammarGaKedoScreen },
  { name: 'OtherSentencePatternsScreen', component: OtherSentencePatternsScreen },
  { name: 'GrammarKoSoADoScreen', component: GrammarKoSoADoScreen },
  { name: 'GrammarYoriNoHougaScreen', component: GrammarYoriNoHougaScreen },
  { name: 'GrammarIchibanComparisonScreen', component: GrammarIchibanComparisonScreen },
  { name: 'GrammarMaeAtoScreen', component: GrammarMaeAtoScreen },
  { name: 'GrammarDakeShikaScreen', component: GrammarDakeShikaScreen },
  { name: 'GrammarNodeKaraScreen', component: GrammarNodeKaraScreen },
  { name: 'GrammarDeshouScreen', component: GrammarDeshouScreen },
  { name: 'GrammarAdverbsNegativeScreen', component: GrammarAdverbsNegativeScreen },
  { name: 'GrammarQuestionWordsScreen', component: GrammarQuestionWordsScreen },
  { name: 'GrammarN4CategoryScreen', component: GrammarN4CategoryScreen },
  { name: 'GrammarNdesuScreen', component: GrammarNdesuScreen },
  { name: 'GrammarHougaiiScreen', component: GrammarHougaiiScreen },
  { name: 'GrammarNoniScreen', component: GrammarNoniScreen },
  { name: 'GrammarNagaraScreen', component: GrammarNagaraScreen },
  { name: 'GrammarNoGaNoHaNoNiScreen', component: GrammarNoGaNoHaNoNiScreen },
  { name: 'GrammarKanoukeiScreen', component: GrammarKanoukeiScreen },
  { name: 'GrammarKotoGaDekiruScreen', component: GrammarKotoGaDekiruScreen },
  { name: 'GrammarKataScreen', component: GrammarKataScreen },
  { name: 'GrammarTooriniScreen', component: GrammarTooriniScreen },
  { name: 'GrammarIshikeiScreen', component: GrammarIshikeiScreen },
  { name: 'GrammarYouToOmoimasuScreen', component: GrammarYouToOmoimasuScreen },
  { name: 'GrammarYouninaruScreen', component: GrammarYouninaruScreen },
  { name: 'GrammarYouniSuruScreen', component: GrammarYouniSuruScreen },
  { name: 'GrammarTsumoriScreen', component: GrammarTsumoriScreen },
  { name: 'GrammarYoteiScreen', component: GrammarYoteiScreen },
  { name: 'GrammarToUsageScreen', component: GrammarToUsageScreen },
  { name: 'GrammarJidouTadoushiScreen', component: GrammarJidouTadoushiScreen },
  { name: 'GrammarBaScreen', component: GrammarBaScreen },
  { name: 'GrammarTaraScreen', component: GrammarTaraScreen },
  { name: 'GrammarToScreen', component: GrammarToScreen },
  { name: 'GrammarNaraScreen', component: GrammarNaraScreen },
  { name: 'GrammarBaaiScreen', component: GrammarBaaiScreen },
  { name: 'GrammarTokiScreen', component: GrammarTokiScreen },
  { name: 'GrammarYouMitaiScreen', component: GrammarYouMitaiScreen },
  { name: 'GrammarSouDesuScreen', component: GrammarSouDesuScreen },
  { name: 'GrammarRashiiScreen', component: GrammarRashiiScreen },
  { name: 'GrammarComparisonScreen', component: GrammarComparisonScreen },
  { name: 'GrammarNiWaScreen', component: GrammarNiWaScreen },
  { name: 'GrammarNiSuruScreen', component: GrammarNiSuruScreen },
  { name: 'GrammarAdjectiveSuruScreen', component: GrammarAdjectiveSuruScreen },
  { name: 'GrammarMouMadaScreen', component: GrammarMouMadaScreen },
  { name: 'GrammarTameniYouniScreen', component: GrammarTameniYouniScreen },
  { name: 'GrammarFukugouDoushiScreen', component: GrammarFukugouDoushiScreen },
  { name: 'GrammarSugiruScreen', component: GrammarSugiruScreen },
  { name: 'GrammarYasuiNIkuiScreen', component: GrammarYasuiNIkuiScreen },
  { name: 'GrammarUkemiScreen', component: GrammarUkemiScreen },
  { name: 'GrammarShiekikeiScreen', component: GrammarShiekikeiScreen },
  { name: 'GrammarMeireikeiScreen', component: GrammarMeireikeiScreen },
  { name: 'GrammarTeAgeruKureruMorauScreen', component: GrammarTeAgeruKureruMorauScreen },
  { name: 'GrammarTeShimauScreen', component: GrammarTeShimauScreen },
  { name: 'GrammarTeAruScreen', component: GrammarTeAruScreen },
  { name: 'GrammarTeOkuScreen', component: GrammarTeOkuScreen },
  { name: 'GrammarKamoshiremasenHasuScreen', component: GrammarKamoshiremasenHasuScreen },
  { name: 'GrammarTeMiruScreen', component: GrammarTeMiruScreen },
  { name: 'GrammarTaraIiDesuKaScreen', component: GrammarTaraIiDesuKaScreen },
  { name: 'GrammarTeItadakemasenScreen', component: GrammarTeItadakemasenScreen },
  { name: 'GrammarKaKaDoukaScreen', component: GrammarKaKaDoukaScreen },
  { name: 'GrammarKeigoScreen', component: GrammarKeigoScreen },
  { name: 'GrammarShiScreen', component: GrammarShiScreen },
  { name: 'GrammarN3CategoryScreen', component: GrammarN3CategoryScreen },
  { name: 'GrammarNaitoNakuchaScreen', component: GrammarNaitoNakuchaScreen },
  { name: 'GrammarChauScreen', component: GrammarChauScreen },
  { name: 'GrammarTokuScreen', component: GrammarTokuScreen },
  { name: 'GrammarMitaiRashiiPpoiScreen', component: GrammarMitaiRashiiPpoiScreen },
  { name: 'GrammarMarudeYouMitaiScreen', component: GrammarMarudeYouMitaiScreen },
  { name: 'GrammarYouniYounaScreen', component: GrammarYouniYounaScreen },
  { name: 'GrammarYouToSuruScreen', component: GrammarYouToSuruScreen },
  { name: 'GrammarBaTaraToIiScreen', component: GrammarBaTaraToIiScreen },
  { name: 'GrammarBakariScreen', component: GrammarBakariScreen },
  { name: 'GrammarSaeScreen', component: GrammarSaeScreen },
  { name: 'GrammarSaeBaScreen', component: GrammarSaeBaScreen },
  { name: 'GrammarKosoScreen', component: GrammarKosoScreen },
  { name: 'GrammarTokoroDesuScreen', component: GrammarTokoroDesuScreen },
  { name: 'GrammarBekidaScreen', component: GrammarBekidaScreen },
  { name: 'GrammarTeShouganaiScreen', component: GrammarTeShouganaiScreen },
  { name: 'GrammarTamaranaideScreen', component: GrammarTamaranaideScreen },
  { name: 'GrammarTsumoriDattanoniScreen', component: GrammarTsumoriDattanoniScreen },
  { name: 'GrammarTameNiScreen', component: GrammarTameNiScreen },
  { name: 'GrammarGaruScreen', component: GrammarGaruScreen },
  { name: 'GrammarTeHoshiiScreen', component: GrammarTeHoshiiScreen },
  { name: 'GrammarUchiNiScreen', component: GrammarUchiNiScreen },
  { name: 'GrammarAidaAidaNiScreen', component: GrammarAidaAidaNiScreen },
  { name: 'GrammarTabiNiScreen', component: GrammarTabiNiScreen },
  { name: 'GrammarSaichuuNiScreen', component: GrammarSaichuuNiScreen },
  { name: 'GrammarKaraNiKaketeScreen', component: GrammarKaraNiKaketeScreen },
  { name: 'GrammarToIuKotoScreen', component: GrammarToIuKotoScreen },
  { name: 'GrammarKanaScreen', component: GrammarKanaScreen },
  { name: 'GrammarWakeDaScreen', component: GrammarWakeDaScreen },
  { name: 'GrammarWakeJanaiScreen', component: GrammarWakeJanaiScreen },
  { name: 'GrammarWakeNiWaIkanaiScreen', component: GrammarWakeNiWaIkanaiScreen },
  { name: 'GrammarMonoMonScreen', component: GrammarMonoMonScreen },
  { name: 'GrammarOkageDeScreen', component: GrammarOkageDeScreen },
  { name: 'GrammarNiChigaiNaiScreen', component: GrammarNiChigaiNaiScreen },
  { name: 'GrammarTteUsageScreen', component: GrammarTteUsageScreen },
  { name: 'GrammarNankaNanteScreen', component: GrammarNankaNanteScreen },
  { name: 'GrammarKawariniScreen', component: GrammarKawariniScreen },
  { name: 'GrammarUeNiScreen', component: GrammarUeNiScreen },
  { name: 'GrammarNiKuwaeteScreen', component: GrammarNiKuwaeteScreen },
  { name: 'GrammarKotoGaAruScreen', component: GrammarKotoGaAruScreen },
  { name: 'GrammarOsoreGaAruScreen', component: GrammarOsoreGaAruScreen },
  { name: 'GrammarNiKimatteIruScreen', component: GrammarNiKimatteIruScreen },
  { name: 'GrammarNiYotteScreen', component: GrammarNiYotteScreen },
  { name: 'GrammarToIuPatternsScreen', component: GrammarToIuPatternsScreen },
  { name: 'GrammarMonokaScreen', component: GrammarMonokaScreen },
  { name: 'GrammarDonnaniKotoKaScreen', component: GrammarDonnaniKotoKaScreen },
  { name: 'GrammarToshiteScreen', component: GrammarToshiteScreen },
  { name: 'GrammarBaToOmouScreen', component: GrammarBaToOmouScreen },
  { name: 'GrammarN2CategoryScreen', component: GrammarN2CategoryScreen },
  { name: 'GrammarConditionScreen', component: GrammarConditionScreen },
  { name: 'GrammarBakarikaScreen', component: GrammarBakarikaScreen },
  { name: 'GrammarBaHodoScreen', component: GrammarBaHodoScreen },
  { name: 'GrammarMonoNaraScreen', component: GrammarMonoNaraScreen },
  { name: 'GrammarToshitaraScreen', component: GrammarToshitaraScreen },
  { name: 'GrammarNaiKotoNiwaScreen', component: GrammarNaiKotoNiwaScreen },
  { name: 'GrammarTatokorodeScreen', component: GrammarTatokorodeScreen },
  { name: 'GrammarMononoScreen', component: GrammarMononoScreen },
  { name: 'GrammarNagaraMoScreen', component: GrammarNagaraMoScreen },
  { name: 'GrammarNishitewaScreen', component: GrammarNishitewaScreen },
  { name: 'GrammarToIttemoScreen', component: GrammarToIttemoScreen },
  { name: 'GrammarReasonScreen', component: GrammarReasonScreen },
  { name: 'GrammarAdviceScreen', component: GrammarAdviceScreen },
  { name: 'GrammarChangeScreen', component: GrammarChangeScreen },
  { name: 'GrammarPurposeScreen', component: GrammarPurposeScreen },
  { name: 'GrammarContrastScreen', component: GrammarContrastScreen },
  { name: 'GrammarEmphasisScreen', component: GrammarEmphasisScreen },
  { name: 'GrammarGuessScreen', component: GrammarGuessScreen },
  { name: 'GrammarLimitScreen', component: GrammarLimitScreen },
  { name: 'GrammarStateScreen', component: GrammarStateScreen },
  { name: 'GrammarTimeScreen', component: GrammarTimeScreen },
  { name: 'GrammarPassiveScreen', component: GrammarPassiveScreen },
  { name: 'GrammarNegativeScreen', component: GrammarNegativeScreen },
  { name: 'GrammarSpecialScreen', component: GrammarSpecialScreen },
  { name: 'GrammarOkagedeScreen', component: GrammarOkagedeScreen },
  { name: 'GrammarSeideScreen', component: GrammarSeideScreen },
  { name: 'GrammarAmariScreen', component: GrammarAmariScreen },
  { name: 'GrammarMonoDakaraScreen', component: GrammarMonoDakaraScreen },
  { name: 'GrammarKotoDashiScreen', component: GrammarKotoDashiScreen },
  { name: 'GrammarDakeNiScreen', component: GrammarDakeNiScreen },
  { name: 'GrammarBakariniScreen', component: GrammarBakariniScreen },
  { name: 'GrammarKaraNiwaijouScreen', component: GrammarKaraNiwaijouScreen },
  { name: 'GrammarUewaScreen', component: GrammarUewaScreen },
  { name: 'GrammarTameniScreen', component: GrammarTameniScreen },
  { name: 'GrammarYouniScreen', component: GrammarYouniScreen },
  { name: 'GrammarNiOujiteScreen', component: GrammarNiOujiteScreen },
  { name: 'GrammarNiSotteScreen', component: GrammarNiSotteScreen },
  { name: 'GrammarNiwatatteScreen', component: GrammarNiwatatteScreen },
  { name: 'GrammarWoTsuujiteScreen', component: GrammarWoTsuujiteScreen },
  { name: 'GrammarSueniScreen', component: GrammarSueniScreen },
  { name: 'GrammarAgekuScreen', component: GrammarAgekuScreen },
  { name: 'GrammarIppouScreen', component: GrammarIppouScreen },
  { name: 'GrammarHanmenScreen', component: GrammarHanmenScreen },
  { name: 'GrammarKawariniN2Screen', component: GrammarKawariniN2Screen },
  { name: 'GrammarKuseniScreen', component: GrammarKuseniScreen },
  { name: 'GrammarToIuYoriScreen', component: GrammarToIuYoriScreen },
  { name: 'GrammarWariniScreen', component: GrammarWariniScreen },
  { name: 'GrammarNishitemoScreen', component: GrammarNishitemoScreen },
  { name: 'GrammarBakarikaN2Screen', component: GrammarBakarikaN2Screen },
  { name: 'GrammarNominarazuScreen', component: GrammarNominarazuScreen },
  { name: 'GrammarWaMochironScreen', component: GrammarWaMochironScreen },
  { name: 'GrammarNiKagirazuScreen', component: GrammarNiKagirazuScreen },
  { name: 'GrammarNiKakawarazuScreen', component: GrammarNiKakawarazuScreen },
  { name: 'GrammarNishitewaN2Screen', component: GrammarNishitewaN2Screen },
  { name: 'GrammarNiChigainaiScreen', component: GrammarNiChigainaiScreen },
  { name: 'GrammarNiSouinaiScreen', component: GrammarNiSouinaiScreen },
  { name: 'GrammarNikimatteiruScreen', component: GrammarNikimatteiruScreen },
  { name: 'GrammarRashiiN2Screen', component: GrammarRashiiN2Screen },
  { name: 'GrammarPpoiScreen', component: GrammarPpoiScreen },
  { name: 'GrammarYounaKigasureScreen', component: GrammarYounaKigasureScreen },
  { name: 'GrammarKanoyoudaScreen', component: GrammarKanoyoudaScreen },
  { name: 'GrammarWakeganaiScreen', component: GrammarWakeganaiScreen },
  { name: 'GrammarHazuganaiScreen', component: GrammarHazuganaiScreen },
  { name: 'GrammarTowaKagiranaiScreen', component: GrammarTowaKagiranaiScreen },
  { name: 'GrammarBekidaN2Screen', component: GrammarBekidaN2Screen },
  { name: 'GrammarKotoDaScreen', component: GrammarKotoDaScreen },
  { name: 'GrammarMonoDaScreen', component: GrammarMonoDaScreen },
  { name: 'GrammarNaiMonokaScreen', component: GrammarNaiMonokaScreen },
  { name: 'GrammarKotoWaNaiScreen', component: GrammarKotoWaNaiScreen },
  { name: 'GrammarTamonodaScreen', component: GrammarTamonodaScreen },
  { name: 'GrammarNiTsureteScreen', component: GrammarNiTsureteScreen },
  { name: 'GrammarNiShitagatteScreen', component: GrammarNiShitagatteScreen },
  { name: 'GrammarToTomoniScreen', component: GrammarToTomoniScreen },
  { name: 'GrammarNiTomonatteScreen', component: GrammarNiTomonatteScreen },
  { name: 'GrammarShidaiDaScreen', component: GrammarShidaiDaScreen },
  { name: 'GrammarNiKagiriScreen', component: GrammarNiKagiriScreen },
  { name: 'GrammarNiKagirazuN2Screen', component: GrammarNiKagirazuN2Screen },
  { name: 'GrammarDakeScreen', component: GrammarDakeScreen },
  { name: 'GrammarNiHokaNaranaiScreen', component: GrammarNiHokaNaranaiScreen },
  { name: 'GrammarNiSuginaiScreen', component: GrammarNiSuginaiScreen },
  { name: 'GrammarToIuMonodaScreen', component: GrammarToIuMonodaScreen },
  { name: 'GrammarNishitemoNishitemoScreen', component: GrammarNishitemoNishitemoScreen },
  { name: 'GrammarNishiroNishiroScreen', component: GrammarNishiroNishiroScreen },
  { name: 'GrammarNiseyoNiseyoScreen', component: GrammarNiseyoNiseyoScreen },
  { name: 'GrammarDonnaniKotoKaN2Screen', component: GrammarDonnaniKotoKaN2Screen },
  { name: 'GrammarIkuraTemoScreen', component: GrammarIkuraTemoScreen },
  { name: 'GrammarToshitemoScreen', component: GrammarToshitemoScreen },
  { name: 'GrammarSaserareruScreen', component: GrammarSaserareruScreen },
  { name: 'GrammarRareruScreen', component: GrammarRareruScreen },
  { name: 'GrammarTeShouganaiN2Screen', component: GrammarTeShouganaiN2Screen },
  { name: 'GrammarTeTamaranaScreen', component: GrammarTeTamaranaScreen },
  { name: 'GrammarTeNaranaiScreen', component: GrammarTeNaranaiScreen },
  { name: 'GrammarNaiDeWaIrarenaiScreen', component: GrammarNaiDeWaIrarenaiScreen },
  { name: 'GrammarZuNiwaIrarenaiScreen', component: GrammarZuNiwaIrarenaiScreen },
  { name: 'GrammarToIutoScreen', component: GrammarToIutoScreen },
  { name: 'GrammarToIeBaScreen', component: GrammarToIeBaScreen },
  { name: 'GrammarToIuttaraScreen', component: GrammarToIuttaraScreen },
  { name: 'GrammarNiOiteScreen', component: GrammarNiOiteScreen },
  { name: 'GrammarWoTowazuScreen', component: GrammarWoTowazuScreen },
  { name: 'GrammarWoMegutteScreen', component: GrammarWoMegutteScreen },
  { name: 'GrammarNiSaishiteScreen', component: GrammarNiSaishiteScreen },
  { name: 'GrammarNiAtatteScreen', component: GrammarNiAtatteScreen },
  { name: 'GrammarKaneruScreen', component: GrammarKaneruScreen },
  { name: 'GrammarKanenaiScreen', component: GrammarKanenaiScreen },
  { name: 'GrammarTeIraiScreen', component: GrammarTeIraiScreen },
  { name: 'GrammarShidaiDeScreen', component: GrammarShidaiDeScreen },
  { name: 'GrammarTebakariIruScreen', component: GrammarTebakariIruScreen },
  { name: 'GrammarPpanashiScreen', component: GrammarPpanashiScreen },
  { name: 'GrammarGachiScreen', component: GrammarGachiScreen },
  { name: 'GrammarKimiScreen', component: GrammarKimiScreen },
  { name: 'GrammarKakeScreen', component: GrammarKakeScreen },
  { name: 'GrammarSaichuuNiN2Screen', component: GrammarSaichuuNiN2Screen },
  { name: 'GrammarUchiNiN2Screen', component: GrammarUchiNiN2Screen },
  { name: 'GrammarTokoroNiScreen', component: GrammarTokoroNiScreen },
  { name: 'GrammarTatoTanscreen', component: GrammarTatoTanscreen },
  { name: 'GrammarKaToOmoutoScreen', component: GrammarKaToOmoutoScreen },
  { name: 'GrammarKaNaiKaScreen', component: GrammarKaNaiKaScreen },
  { name: 'SelectKanjiLevel', component: SelectKanjiLevel },
  { name: 'KanjiN5Screen', component: KanjiN5Screen },
  { name: 'KanjiN4Screen', component: KanjiN4Screen },
  { name: 'KanjiN3Screen', component: KanjiN3Screen },
  { name: 'KanjiN2Screen', component: KanjiN2Screen },
]

export default function Routers({ initialRouteName }: RoutersProps) {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName={initialRouteName}>
        {screens.map(({ name, component }) => (
          <Stack.Screen
            key={name}
            name={name}
            component={component}
            options={{ headerShown: false }}
          />
        ))}
      </Stack.Navigator>
    </NavigationContainer>
  )
}
