/*
RuhHalleri Talimatları

Aşağıdaki kısa videoyu izleyin:
https://www.ergineer.com/assets/materials/a664dfe7-ruhhalleri.gif

Bu Sayacı oluşturmak için kaç adet state dilimine ihtiyacınız var? Başlamadan önce biraz üzerine düşünün!

Bazıları 3 adet olduğunu söyleyecektir: her ruh hali için bir (mutlu, üzgün, ve bilinmeyen).
Fakat tek bir state dilimi bu durumları saklamak için yeterlidir!

ADIM 0:
  Aşağıdaki bileşeni inceleyin ve state hook'u import edin.

ADIM 1:
  State hook'u kullanarak bir 'ruhHali' ve 'setRuhHali' oluşturun.
  'ruhHali' state dilimi verilen 3 ruh halinden birisiyle yüklenecek.
  Bu değişkenler zaten tanımlandı, bu uzun cümleleri bileşen içine tekrar yazmanıza gerek yok.

ADIM 2:
  Eğer state mutluysa rengi royalblue yapın, diğer durumlar için crimson yapın.

ADIM 3:
  JSX içinde sabit yazılmış ruh halini silip `ruhHali` state dilimine göre kıvrımlı parantezler içerisinde ekleyin.

ADIM 4, 5, 6:
  Click handler içinde `setRuhHali` ni kulanarak aşağıda tanımlanmış değişkenleri kullanarak ruhHali'ni güncelleyin
*/

<<<<<<< HEAD
import React,{useState} from 'react'; /* ADIM 0 */
=======
import React, {useState} from 'react'; /* ADIM 0 */
>>>>>>> 85b0856b13b3bedd4df2ac7db4e8256a78f48ed0

const ilkRuhHali = 'Nasıl hissettiğimi bilmiyorum :-|';
const mutluRuhHali = 'Oldukça mutlu :)';
const uzgunRuhHali = 'Oldukça üzgün :(';

export default function RuhHalleri() {
  const [ruhHali, setRuhHali] = useState(ilkRuhHali);
  /* ADIM 1 */
  const[ruhHali,setRuhHali]=useState(ilkRuhHali,mutluRuhHali,uzgunRuhHali)
	
	
  const mutluEt = () => {
<<<<<<< HEAD
    /* ADIM 4 */
    setRuhHali(mutluRuhHali)
  };
  const uZ = () => {
    /* ADIM 5 */
    setRuhHali(uzgunRuhHali)
  };
  const reset = () => {
    /* ADIM 6 */
    setRuhHali(ilkRuhHali)
=======
   setRuhHali(mutluRuhHali); /* ADIM 4 */
  };
  const uZ = () => {
    setRuhHali(uzgunRuhHali); /* ADIM 5 */
  };
  const reset = () => {
    setRuhHali(ilkRuhHali);/* ADIM 6 */
>>>>>>> 85b0856b13b3bedd4df2ac7db4e8256a78f48ed0
  };

  const stil = {
    fontSize: '1.5em',
    marginBottom: '0.3em',
<<<<<<< HEAD
    color: mutluRuhHali ? 'royalblue':crimson /* ADIM 2 */
=======
    color: ruhHali==mutluRuhHali?"royalblue":"crimson"/* ADIM 2 */
>>>>>>> 85b0856b13b3bedd4df2ac7db4e8256a78f48ed0
  };

  return (
    <div className='widget-moods container'>
      <h2>RuhHalleri</h2>
<<<<<<< HEAD
	<div id='ruhHali' style={stil}>'Nasıl hissettiğimi bilmiyorum :-|'</div> {ruhHali}
=======
	<div id='ruhHali' style={stil}>'Nasıl hissettiğimi bilmiyorum :-|'</div> {ruhHali/* ADIM 3 */}
>>>>>>> 85b0856b13b3bedd4df2ac7db4e8256a78f48ed0
      <div>
        <button id='mutluEt' onClick={mutluEt}>Mutlu Et</button>
        <button id='uz' onClick={uZ}>Üz</button>
        <button id='resetRuhHali' onClick={reset}>Reset</button>
      </div>
    </div>
  );
}
