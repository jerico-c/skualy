import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef, useState } from 'react';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';

// Menu Data Structure
const menuData = {
  paketNasi: [
    { name: 'Ayam Goreng (Paha / Dada)', description: 'Nasi, ayam goreng, lalapan, sambal', price: '15.000' },
    { name: 'Ayam Bakar', description: 'Nasi, ayam bakar, lalapan, sambal', price: '17.000' },
    { name: 'Nila Goreng', description: 'Nasi, ikan nila goreng, lalapan, sambal', price: '18.000' },
    { name: 'Nila Bakar', description: 'Nasi, ikan nila bakar, lalapan, sambal', price: '20.000' },
    { name: 'Lele Goreng', description: 'Nasi, lele goreng, lalapan, sambal', price: '15.000' },
    { name: 'Lele Bakar', description: 'Nasi, lele bakar, lalapan, sambal', price: '18.000' },
  ],
  sayuranLauk: [
    { name: 'Cah Kangkung', description: 'Kangkung segar tumis bumbu', price: '5.000' },
    { name: 'Plecing Kangkung', description: 'Kangkung dengan sambal plecing', price: '6.000' },
    { name: 'Cah Jamur', description: 'Jamur tumis', price: '5.000' },
    { name: 'Pecel', description: 'Sayuran dengan bumbu pecel', price: '5.000' },
    { name: 'Urap', description: 'Sayuran dengan kelapa bumbu', price: '5.000' },
    { name: 'Jamur Goreng', description: 'Jamur goreng crispy', price: '6.000' },
    { name: 'Gorengan', description: '4 pcs + sambal kecap', price: '6.000' },
    { name: 'Kentang Goreng', description: 'French fries', price: '10.000' },
    { name: 'Mix Platter', description: 'Aneka gorengan pilihan', price: '13.000' },
    { name: 'Singkong Keju Susu', description: 'Singkong goreng topping keju susu', price: '10.000' },
    { name: 'Cireng', description: 'Cireng aci goreng', price: '8.000' },
  ],
  lainLain: [
    { name: 'Pop Mie', description: 'Mie instan cup', price: '8.000' },
    { name: 'Indomie Telur', description: 'Indomie dengan telur', price: '10.000' },
    { name: 'Indomie', description: 'Mie instan goreng/rebus', price: '7.000' },
    { name: 'Telur Dadar / Goreng / Bakar', description: 'Pilihan telur', price: '5.000' },
    { name: 'Nasi Putih', description: 'Nasi putih hangat', price: '5.000' },
    { name: 'Pisang Coklat Keju', description: 'Pisang goreng topping coklat keju', price: '10.000' },
  ],
  minuman: [
    { name: 'Kopi Hitam', description: 'Kopi hitam original', price: '5.000' },
    { name: 'Kopi Susu', description: 'Kopi susu manis', price: '5.000' },
    { name: 'Teh (Es / Panas)', description: 'Teh manis segar', price: '4.000' },
    { name: 'Jeruk (Es / Panas)', description: 'Jeruk peras segar', price: '5.000' },
    { name: 'Milo', description: 'Minuman coklat malt', price: '5.000' },
    { name: 'Chocolatos', description: 'Minuman coklat', price: '5.000' },
    { name: 'Drink Beng-beng', description: 'Minuman coklat wafer', price: '5.000' },
    { name: 'Uwuh', description: 'Wedang rempah tradisional', price: '6.000' },
    { name: 'Jahe / Susu Jahe', description: 'Minuman jahe hangat', price: '5.000' },
    { name: 'Lemon Tea', description: 'Teh lemon segar', price: '5.000' },
    { name: 'Susu (Es / Panas)', description: 'Susu segar', price: '5.000' },
    { name: 'Air Mineral', description: 'Air mineral botol', price: '4.000' },
    { name: 'Air Es', description: 'Air es dingin', price: '2.000' },
    { name: 'Jus Alpukat', description: 'Jus alpukat segar blend', price: '10.000' },
    { name: 'Jus Jambu', description: 'Jus jambu merah segar', price: '10.000' },
    { name: 'Jus Nanas', description: 'Jus nanas segar', price: '10.000' },
    { name: 'Jus Semangka', description: 'Jus semangka segar', price: '10.000' },
    { name: 'Jus Melon', description: 'Jus melon segar', price: '10.000' },
  ],
};


// Menu Card Component
const MenuCard = ({ name, description, price }: { name: string; description: string; price: string }) => (
  <motion.div
    whileHover={{ y: -4 }}
    transition={{ duration: 0.3 }}
    className="group bg-white/80 backdrop-blur-sm rounded-lg p-5 shadow-sm hover:shadow-md transition-all duration-300 border border-amber-100/50"
  >
    <div className="flex justify-between items-start gap-3 mb-2">
      <h4 className="font-serif text-base md:text-lg text-amber-950 font-medium leading-tight flex-1">
        {name}
      </h4>
      <span className="font-serif text-lg md:text-xl text-amber-700 font-semibold whitespace-nowrap">
        {price.replace('.000', 'k')}
      </span>
    </div>
    <p className="text-sm text-amber-900/60 leading-relaxed">{description}</p>
  </motion.div>
);

// Category Grid Component
const CategoryGrid = ({ items }: { items: typeof menuData.paketNasi }) => (
  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
    {items.map((item, index) => (
      <motion.div
        key={item.name}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: index * 0.05 }}
      >
        <MenuCard {...item} />
      </motion.div>
    ))}
  </div>
);


export const MenuSection = () => {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-100px" });
  const [activeTab, setActiveTab] = useState('paket');

  return (
    <section
      id="menu"
      ref={sectionRef}
      className="section-container bg-gradient-to-b from-amber-50/30 via-orange-50/20 to-yellow-50/30"
    >
      <div className="container mx-auto px-6 md:px-12">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 1, ease: [0.25, 0.1, 0.25, 1] }}
          className="text-center max-w-3xl mx-auto mb-12 md:mb-16"
        >
          <p className="caption mb-4 text-amber-700 font-medium tracking-wider">DAFTAR MENU</p>
          <h2 className="headline-section text-amber-950 mb-4 font-serif">
            Menu Skualy
          </h2>
          <p className="body-large text-amber-900/70">
            Sajian lezat dengan harga terjangkau untuk menemani hari Anda
          </p>
        </motion.div>

        {/* Menu Tabs */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <Tabs defaultValue="paket" className="w-full" onValueChange={setActiveTab}>
            <TabsList className="w-full max-w-4xl mx-auto grid grid-cols-2 lg:grid-cols-5 gap-2 bg-white/60 backdrop-blur-sm p-2 rounded-xl mb-10 h-auto">
              <TabsTrigger 
                value="paket" 
                className="data-[state=active]:bg-gradient-to-r data-[state=active]:from-amber-500 data-[state=active]:to-orange-500 data-[state=active]:text-white font-medium py-3 rounded-lg transition-all"
              >
                Paket Nasi
              </TabsTrigger>
              <TabsTrigger 
                value="sayuran"
                className="data-[state=active]:bg-gradient-to-r data-[state=active]:from-green-500 data-[state=active]:to-emerald-500 data-[state=active]:text-white font-medium py-3 rounded-lg transition-all"
              >
                Sayuran
              </TabsTrigger>
              <TabsTrigger 
                value="lain"
                className="data-[state=active]:bg-gradient-to-r data-[state=active]:from-amber-600 data-[state=active]:to-yellow-600 data-[state=active]:text-white font-medium py-3 rounded-lg transition-all"
              >
                Lain-lain
              </TabsTrigger>
              <TabsTrigger 
                value="minuman"
                className="data-[state=active]:bg-gradient-to-r data-[state=active]:from-orange-600 data-[state=active]:to-red-500 data-[state=active]:text-white font-medium py-3 rounded-lg transition-all"
              >
                Minuman
              </TabsTrigger>
              <TabsTrigger 
                value="semua"
                className="data-[state=active]:bg-gradient-to-r data-[state=active]:from-purple-600 data-[state=active]:to-pink-600 data-[state=active]:text-white font-medium py-3 rounded-lg transition-all col-span-2 lg:col-span-1"
              >
                Semua
              </TabsTrigger>
            </TabsList>

            {/* Paket Nasi */}
            <TabsContent value="paket" className="mt-0">
              <div className="max-w-6xl mx-auto">
                <div className="mb-6 text-center">
                  <h3 className="text-2xl font-serif text-amber-900 mb-2">Paket Makanan</h3>
                  <p className="text-amber-700/70">Nasi lengkap dengan lauk pilihan</p>
                </div>
                <CategoryGrid items={menuData.paketNasi} />
              </div>
            </TabsContent>

            {/* Sayuran & Lauk */}
            <TabsContent value="sayuran" className="mt-0">
              <div className="max-w-6xl mx-auto">
                <div className="mb-6 text-center">
                  <h3 className="text-2xl font-serif text-amber-900 mb-2">Sayuran & Lauk</h3>
                  <p className="text-amber-700/70">Aneka sayuran dan lauk pendamping</p>
                </div>
                <CategoryGrid items={menuData.sayuranLauk} />
              </div>
            </TabsContent>

            {/* Lain-lain */}
            <TabsContent value="lain" className="mt-0">
              <div className="max-w-6xl mx-auto">
                <div className="mb-6 text-center">
                  <h3 className="text-2xl font-serif text-amber-900 mb-2">Lain-lain</h3>
                  <p className="text-amber-700/70">Menu tambahan dan cemilan</p>
                </div>
                <CategoryGrid items={menuData.lainLain} />
              </div>
            </TabsContent>

            {/* Minuman */}
            <TabsContent value="minuman" className="mt-0">
              <div className="max-w-6xl mx-auto">
                <div className="mb-6 text-center">
                  <h3 className="text-2xl font-serif text-amber-900 mb-2">Minuman</h3>
                  <p className="text-amber-700/70">Kopi, teh, jus, dan minuman segar lainnya</p>
                </div>
                <CategoryGrid items={menuData.minuman} />
              </div>
            </TabsContent>

            {/* Semua Menu */}
            <TabsContent value="semua" className="mt-0">
              <div className="max-w-6xl mx-auto space-y-12">
                {/* Paket Nasi */}
                <div>
                  <div className="mb-6">
                    <h3 className="text-2xl font-serif text-amber-900 mb-2">Paket Makanan</h3>
                    <p className="text-amber-700/70">Nasi lengkap dengan lauk pilihan</p>
                  </div>
                  <CategoryGrid items={menuData.paketNasi} />
                </div>

                {/* Sayuran */}
                <div>
                  <div className="mb-6">
                    <h3 className="text-2xl font-serif text-amber-900 mb-2">Sayuran & Lauk</h3>
                    <p className="text-amber-700/70">Aneka sayuran dan lauk pendamping</p>
                  </div>
                  <CategoryGrid items={menuData.sayuranLauk} />
                </div>

                {/* Lain-lain */}
                <div>
                  <div className="mb-6">
                    <h3 className="text-2xl font-serif text-amber-900 mb-2">Lain-lain</h3>
                    <p className="text-amber-700/70">Menu tambahan dan cemilan</p>
                  </div>
                  <CategoryGrid items={menuData.lainLain} />
                </div>

                {/* Minuman */}
                <div>
                  <div className="mb-6">
                    <h3 className="text-2xl font-serif text-amber-900 mb-2">Minuman</h3>
                    <p className="text-amber-700/70">Kopi, teh, jus, dan minuman segar lainnya</p>
                  </div>
                  <CategoryGrid items={menuData.minuman} />
                </div>
              </div>
            </TabsContent>
          </Tabs>
        </motion.div>
      </div>
    </section>
  );
};
