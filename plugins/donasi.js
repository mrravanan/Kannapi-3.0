let handler = async m => m.reply(`
╭─「 Donation • Credit 」
│ •  ᵐᵃᵏᵉ ʸᵒᵘʳ ᵒʷⁿ ʷʰᵃᵗˢ ᵃᵖᵖ ᵇᵒᵗ : https://youtube.com/c/MrRavanan
│ • ᵈᵒⁿᵗ ʳᵉ ᵉᵈⁱᵗ ᵗʰⁱˢ ˢᶜʳⁱᵖᵗ/ᵈᵒⁿᵗ ᶜʰᵃⁿᵍᵉ ᶜʳᵉᵈⁱᵗˢ
│ • ⁱᶠ ʸᵒᵘ ʰᵃᵛᵉ ᵃⁿʸ ⁱˢˢᵘᵉ ⁱⁿ ᵇⁱᵗ ʸᵒᵘ ᶜᵃⁿ ˢᵉⁿᵈ ᵐᵉˢˢᵉᵍᵉ
│ 「 ᶜʰᵃᵗ OWNER 」
│ > ᵐʳ ʳᵃᵛᵃⁿᵃⁿ wa.me//+919048410619
╰────
`.trim()) // Tambah sendiri kalo mau
handler.help = ['donasi']
handler.tags = ['about']
handler.command = /^dona(te|si)$/i

module.exports = handler
