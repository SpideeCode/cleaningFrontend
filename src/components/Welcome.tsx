import React, { useEffect, useState } from 'react';

export default function Welcome() {
    // Mock auth data - you can replace this with actual auth logic
    const auth = { user: null };
    const [showTopBtn, setShowTopBtn] = useState(false);

    // Smooth scroll navigation
    const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, targetId: string) => {
        e.preventDefault();
        const el = document.getElementById(targetId);
        if (el) {
            el.scrollIntoView({ behavior: 'smooth' });
        }
    };

    // Reveal animation on scroll
    useEffect(() => {
        const revealElements = document.querySelectorAll('.reveal');
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        entry.target.classList.add('opacity-100', 'translate-y-0');
                    }
                });
            },
            { threshold: 0.1 },
        );

        revealElements.forEach((el) => observer.observe(el));
        return () => revealElements.forEach((el) => observer.unobserve(el));
    }, []);

    // Back to top button
    useEffect(() => {
        const onScroll = () => setShowTopBtn(window.scrollY > 400);
        window.addEventListener('scroll', onScroll);
        return () => window.removeEventListener('scroll', onScroll);
    }, []);

    const handleFormSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        // Handle form submission here
        alert('Message envoyé ! Nous vous répondrons rapidement.');
    };

    return (
        <>
            <style>{`
                html { scroll-behavior: smooth; }
                .reveal {
                    opacity: 0;
                    transform: translateY(40px);
                    transition: all 0.8s ease-out;
                }
                .opacity-100 { opacity: 1 !important; }
                .translate-y-0 { transform: translateY(0) !important; }
                .service-card:hover {
                    box-shadow: 0 12px 28px rgba(0, 0, 0, 0.1);
                    transform: translateY(-6px);
                    transition: 0.3s ease;
                }
            `}</style>

            <div className="min-h-screen bg-gradient-to-br from-white to-gray-100 font-sans text-gray-800">
                {/* HEADER */}
                <header className="sticky top-0 z-50 border-b border-gray-200 bg-white/90 px-6 py-4 shadow-md backdrop-blur-md">
                    <div className="mx-auto max-w-7xl flex items-center justify-between">
                        <a href="/" className="text-3xl font-bold text-gray-900">
                            Nettoyage<span className="text-blue-700">Pro</span>
                        </a>
                        <nav className="hidden md:flex space-x-6 text-base text-gray-700">
                            <a
                                href="/"
                                onClick={(e) => {
                                    e.preventDefault();
                                    window.scrollTo({ top: 0, behavior: 'smooth' });
                                }}
                                className="transition hover:text-blue-700"
                            >
                                Accueil
                            </a>
                            <a href="#services" onClick={(e) => handleNavClick(e, 'services')} className="transition hover:text-blue-700">
                                Services
                            </a>
                            <a href="#about" onClick={(e) => handleNavClick(e, 'about')} className="transition hover:text-blue-700">
                                À propos
                            </a>
                            <a href="#contact" onClick={(e) => handleNavClick(e, 'contact')} className="transition hover:text-blue-700">
                                Contact
                            </a>
                            {auth.user ? (
                                <a href="/dashboard" className="font-medium text-blue-700 hover:underline">
                                    Mon espace
                                </a>
                            ) : (
                                <a href="/login" className="font-medium text-blue-600 hover:underline">
                                    Connexion
                                </a>
                            )}
                        </nav>
                        
                        {/* Mobile menu button */}
                        <button className="md:hidden p-2 text-gray-600 hover:text-blue-700">
                            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                            </svg>
                        </button>
                    </div>
                </header>

                {/* HERO */}
                <section className="reveal mx-auto max-w-6xl flex flex-col items-center justify-between gap-12 px-6 py-24 md:flex-row">
                    <div className="md:w-1/2">
                        <h1 className="mb-6 text-5xl leading-tight font-extrabold text-gray-900">
                            Propreté <span className="text-blue-700">haut de gamme</span> pour votre quotidien
                        </h1>
                        <p className="mb-8 text-lg text-gray-700">
                            Nous assurons des services de nettoyage premium, écologiques et efficaces pour particuliers et entreprises.
                        </p>
                        <a
                            href="#contact"
                            onClick={(e) => handleNavClick(e, 'contact')}
                            className="inline-block rounded-xl bg-blue-700 px-8 py-4 font-medium text-white shadow-lg transition hover:bg-blue-800 hover:shadow-xl transform hover:scale-105"
                        >
                            Demander un devis
                        </a>
                    </div>
                    <div className="md:w-1/2">
                        <img
                            src="https://images.unsplash.com/photo-1497366754035-f200968a6e72?q=80&w=1169&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                            alt="Nettoyage professionnel"
                            className="mx-auto w-full max-w-md rounded-3xl shadow-xl transition hover:shadow-2xl"
                        />
                    </div>
                </section>

                {/* SERVICES */}
                <section id="services" className="reveal bg-white py-24">
                    <div className="mx-auto max-w-6xl px-6">
                        <h2 className="mb-6 text-center text-3xl font-bold text-gray-900 md:text-4xl">Nos services professionnels</h2>
                        <p className="mx-auto mb-16 max-w-3xl text-center text-gray-600">
                            Nous proposons un panel de services haut de gamme pour particuliers et entreprises, adaptés à vos besoins spécifiques,
                            avec une qualité d'exécution irréprochable.
                        </p>

                        <div className="grid grid-cols-1 gap-10 md:grid-cols-3">
                            <div className="service-card rounded-2xl bg-gradient-to-br from-blue-50 to-blue-100 p-8 shadow-xl transition cursor-pointer">
                                <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-full bg-white shadow">
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        className="h-6 w-6 text-blue-700"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        stroke="currentColor"
                                    >
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                                    </svg>
                                </div>
                                <h3 className="mb-3 text-xl font-semibold text-gray-900">Nettoyage de bureaux</h3>
                                <p className="text-sm text-gray-600">
                                    Des espaces de travail propres, sains et motivants pour améliorer l'image de votre entreprise et le bien-être de
                                    vos employés.
                                </p>
                            </div>

                            <div className="service-card rounded-2xl bg-gradient-to-br from-green-50 to-green-100 p-8 shadow-xl transition cursor-pointer">
                                <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-full bg-white shadow">
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        className="h-6 w-6 text-green-700"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        stroke="currentColor"
                                    >
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
                                    </svg>
                                </div>
                                <h3 className="mb-3 text-xl font-semibold text-gray-900">Nettoyage résidentiel</h3>
                                <p className="text-sm text-gray-600">
                                    Des prestations soignées à domicile, pour un intérieur propre, confortable et sain, en toute discrétion.
                                </p>
                            </div>

                            <div className="service-card rounded-2xl bg-gradient-to-br from-purple-50 to-purple-100 p-8 shadow-xl transition cursor-pointer">
                                <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-full bg-white shadow">
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        className="h-6 w-6 text-purple-700"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        stroke="currentColor"
                                    >
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                                    </svg>
                                </div>
                                <h3 className="mb-3 text-xl font-semibold text-gray-900">Entretien régulier</h3>
                                <p className="text-sm text-gray-600">
                                    Des interventions planifiées et flexibles selon vos horaires et besoins pour maintenir un haut niveau de propreté
                                    constant.
                                </p>
                            </div>
                        </div>
                    </div>
                </section>

                {/* ABOUT */}
                <section id="about" className="reveal py-24 bg-gradient-to-r from-blue-50 to-indigo-50">
                    <div className="mx-auto max-w-6xl px-6">
                        <div className="text-center mb-16">
                            <h2 className="mb-6 text-3xl font-bold text-blue-700 md:text-4xl">
                                Pourquoi choisir <span className="text-gray-900">Nettoyage Pro</span> ?
                            </h2>
                            <p className="mb-8 text-lg text-gray-700 max-w-3xl mx-auto">
                                Notre équipe expérimentée assure un service discret, soigné et respectueux de l'environnement. Nous utilisons des produits
                                éco-responsables et des méthodes modernes, pour un résultat impeccable.
                            </p>
                        </div>
                        
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                            <div className="text-center p-6 bg-white rounded-xl shadow-lg hover:shadow-xl transition">
                                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                                    <svg className="w-8 h-8 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                                    </svg>
                                </div>
                                <h4 className="mb-2 font-semibold text-blue-700 text-lg">Équipe certifiée</h4>
                                <p className="text-sm text-gray-600">Des professionnels formés, passionnés, engagés dans la qualité de service.</p>
                            </div>
                            
                            <div className="text-center p-6 bg-white rounded-xl shadow-lg hover:shadow-xl transition">
                                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                                    <svg className="w-8 h-8 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9v-9m0-9v9m0 9c5 0 9-4 9-9s-4-9-9-9" />
                                    </svg>
                                </div>
                                <h4 className="mb-2 font-semibold text-blue-700 text-lg">Produits écologiques</h4>
                                <p className="text-sm text-gray-600">Respect de l'environnement, sans compromis sur l'efficacité.</p>
                            </div>
                            
                            <div className="text-center p-6 bg-white rounded-xl shadow-lg hover:shadow-xl transition">
                                <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                                    <svg className="w-8 h-8 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                                    </svg>
                                </div>
                                <h4 className="mb-2 font-semibold text-blue-700 text-lg">Ponctualité</h4>
                                <p className="text-sm text-gray-600">Respect des horaires convenus, flexibilité selon vos besoins.</p>
                            </div>
                            
                            <div className="text-center p-6 bg-white rounded-xl shadow-lg hover:shadow-xl transition">
                                <div className="w-16 h-16 bg-yellow-100 rounded-full flex items-center justify-center mx-auto mb-4">
                                    <svg className="w-8 h-8 text-yellow-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                                    </svg>
                                </div>
                                <h4 className="mb-2 font-semibold text-blue-700 text-lg">Assurance qualité</h4>
                                <p className="text-sm text-gray-600">Satisfaction garantie avec service après-vente personnalisé.</p>
                            </div>
                        </div>
                    </div>
                </section>

                {/* CONTACT */}
                <section id="contact" className="reveal mx-auto max-w-6xl px-6 py-24">
                    <h2 className="mb-6 text-center text-3xl font-bold text-blue-700 md:text-4xl">Contactez-nous</h2>
                    <p className="mx-auto mb-12 max-w-3xl text-center text-gray-600">
                        Une question, un besoin spécifique ou une demande de devis ? Laissez-nous un message, nous vous répondrons rapidement.
                    </p>

                    <div className="grid gap-12 lg:grid-cols-2">
                        {/* Form */}
                        <form onSubmit={handleFormSubmit} className="space-y-6 rounded-2xl bg-white p-8 shadow-xl">
                            <div>
                                <label className="mb-2 block text-gray-700 font-medium">Nom complet</label>
                                <input
                                    type="text"
                                    required
                                    placeholder="Votre nom"
                                    className="w-full rounded-lg border border-gray-300 px-4 py-3 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 focus:outline-none transition"
                                />
                            </div>
                            <div>
                                <label className="mb-2 block text-gray-700 font-medium">Adresse e-mail</label>
                                <input
                                    type="email"
                                    required
                                    placeholder="vous@email.com"
                                    className="w-full rounded-lg border border-gray-300 px-4 py-3 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 focus:outline-none transition"
                                />
                            </div>
                            <div>
                                <label className="mb-2 block text-gray-700 font-medium">Téléphone</label>
                                <input
                                    type="tel"
                                    placeholder="+32 471 12 34 56"
                                    className="w-full rounded-lg border border-gray-300 px-4 py-3 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 focus:outline-none transition"
                                />
                            </div>
                            <div>
                                <label className="mb-2 block text-gray-700 font-medium">Message</label>
                                <textarea
                                    required
                                    placeholder="Expliquez-nous votre besoin..."
                                    rows={5}
                                    className="w-full rounded-lg border border-gray-300 px-4 py-3 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 focus:outline-none transition resize-none"
                                />
                            </div>
                            <button 
                                type="submit" 
                                className="w-full rounded-lg bg-blue-700 px-6 py-3 font-semibold text-white transition hover:bg-blue-800 hover:shadow-lg transform hover:scale-105"
                            >
                                Envoyer le message
                            </button>
                        </form>

                        {/* Infos contact */}
                        <div className="flex flex-col justify-center space-y-8">
                            <div className="flex items-start space-x-4">
                                <div className="flex-shrink-0">
                                    <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center">
                                        <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                                        </svg>
                                    </div>
                                </div>
                                <div>
                                    <h4 className="text-lg font-semibold text-gray-800 mb-2">Adresse</h4>
                                    <p className="text-gray-600">Rue de l'Exemple 123<br/>1000 Bruxelles, Belgique</p>
                                </div>
                            </div>
                            
                            <div className="flex items-start space-x-4">
                                <div className="flex-shrink-0">
                                    <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center">
                                        <svg className="w-6 h-6 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                                        </svg>
                                    </div>
                                </div>
                                <div>
                                    <h4 className="text-lg font-semibold text-gray-800 mb-2">Téléphone</h4>
                                    <p className="text-gray-600">+32 471 12 34 56</p>
                                </div>
                            </div>
                            
                            <div className="flex items-start space-x-4">
                                <div className="flex-shrink-0">
                                    <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center">
                                        <svg className="w-6 h-6 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                                        </svg>
                                    </div>
                                </div>
                                <div>
                                    <h4 className="text-lg font-semibold text-gray-800 mb-2">Email</h4>
                                    <p className="text-gray-600">contact@nettoyagepro.be</p>
                                </div>
                            </div>
                            
                            
                        </div>
                    </div>
                </section>

                {/* FOOTER */}
                <footer className="mt-12 border-t border-gray-200 bg-white">
                    <div className="mx-auto max-w-7xl flex flex-col items-center justify-between px-6 py-8 text-sm text-gray-600 md:flex-row">
                        <p className="mb-4 md:mb-0">&copy; {new Date().getFullYear()} Nettoyage Pro. Tous droits réservés.</p>
                        <div className="space-x-4">
                            <a href="#services" onClick={(e) => handleNavClick(e, 'services')} className="hover:text-blue-700">
                                Services
                            </a>
                            <a href="#about" onClick={(e) => handleNavClick(e, 'about')} className="hover:text-blue-700">
                                À propos
                            </a>
                            <a href="#contact" onClick={(e) => handleNavClick(e, 'contact')} className="hover:text-blue-700">
                                Contact
                            </a>
                        </div>
                    </div>
                </footer>

                {/* BACK TO TOP BUTTON */}
                {showTopBtn && (
                    <button
                        onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
                        className="fixed right-6 bottom-6 z-50 rounded-full bg-blue-700 p-4 text-white shadow-lg transition hover:bg-blue-800 hover:shadow-xl transform hover:scale-110"
                        title="Retour en haut"
                    >
                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 10l7-7m0 0l7 7m-7-7v18" />
                        </svg>
                    </button>
                )}
            </div>
        </>
    );
}