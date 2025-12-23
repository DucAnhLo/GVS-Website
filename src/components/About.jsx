'use client'
import React from 'react';
import { Icon } from '@iconify/react';
import { useLanguage } from '@/contexts/LanguageContext';

const About = () => {
  const { t } = useLanguage();

  return (
    <section className="relative bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto">
        {/* Hero Section - Split Design */}
        <div className="grid lg:grid-cols-2 min-h-[70vh]">
          {/* Left - Black Section */}
          <div className="bg-gray-900 text-white p-12 lg:p-20 flex flex-col justify-center">
            <div className="space-y-6">
              <div className="inline-block px-4 py-2 bg-white/10 text-sm font-medium uppercase tracking-widest rounded-full">
                {t('about.badge')}
              </div>
              <h1 className="text-4xl lg:text-[48px] font-semibold leading-tight">
                {t('about.hero.prefix')}
                <span className="block text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400">
                  {t('about.hero.highlight')}
                </span>
                {t('about.hero.suffix')}
              </h1>
              <p className="text-xl text-gray-300 leading-relaxed max-w-lg">
                {t('about.hero.description')}
              </p>
            </div>
          </div>

          {/* Right - White Section with Focus Areas */}
          <div className="bg-white p-12 lg:p-20 flex flex-col justify-center relative overflow-hidden">
            <div className="absolute top-0 right-0 text-[50px] font-semibold text-gray-50 leading-none select-none">
              GVS
            </div>
            <div className="relative z-10 space-y-8">
              <div>
                <div className="text-2xl font-medium text-gray-900 mb-4">{t('about.focus.title')}</div>
                <p className="text-lg text-gray-600 leading-relaxed">
                  {t('about.focus.description')}
                </p>
              </div>
              <div className="space-y-4">
                <div className="flex items-center gap-4">
                  <div className="w-16 h-1 bg-blue-500 rounded-full"></div>
                  <span className="text-gray-700 font-medium">{t('about.focus.areas.educational')}</span>
                </div>
                <div className="flex items-center gap-4">
                  <div className="w-24 h-1 bg-purple-500 rounded-full"></div>
                  <span className="text-gray-700 font-medium">{t('about.focus.areas.business')}</span>
                </div>
                <div className="flex items-center gap-4">
                  <div className="w-20 h-1 bg-green-500 rounded-full"></div>
                  <span className="text-gray-700 font-medium">{t('about.focus.areas.migration')}</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Story Section - Asymmetric Layout */}
        <div className="px-6 py-24">
          <div className="grid lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-5">
              <h2 className="text-5xl font-semibold text-gray-900 mb-8 leading-tight">
                {t('about.story.title')}
              </h2>
              <div className="w-20 h-1 bg-blue-500 mb-8 rounded-full"></div>
              <div className="space-y-6 text-gray-600 leading-relaxed text-lg">
                <p>
                  {t('about.story.paragraphs.p1')}
                </p>
                <p>
                  {t('about.story.paragraphs.p2')}
                </p>
                <p className="font-medium text-gray-900">
                  {t('about.story.paragraphs.p3')}
                </p>
              </div>
            </div>

            <div className="lg:col-span-7">
              <div className="relative">
                {/* Large decorative element */}
                <div className="absolute -top-8 -right-8 w-64 h-64 bg-gradient-to-br from-blue-100 to-purple-100 rounded-full blur-3xl opacity-50"></div>
                <div className="relative bg-gray-50 p-12 border-l-8 border-blue-500 rounded-r-3xl rounded-bl-3xl">
                  <div className="space-y-8">
                    <div>
                      <div className="text-sm font-medium text-blue-600 uppercase tracking-widest mb-2">{t('about.mission.badge')}</div>
                      <h3 className="text-2xl font-medium text-gray-900 mb-3">{t('about.mission.title')}</h3>
                      <p className="text-gray-600 leading-relaxed">
                        {t('about.mission.description')}
                      </p>
                    </div>
                    <div className="grid grid-cols-2 gap-6">
                      <div className="space-y-2">
                        <Icon icon="fluent:people-team-24-filled" className="w-8 h-8 text-purple-500" />
                        <div className="text-sm font-medium text-gray-900">{t('about.mission.values.clientFirst')}</div>
                      </div>
                      <div className="space-y-2">
                        <Icon icon="fluent:rocket-24-filled" className="w-8 h-8 text-blue-500" />
                        <div className="text-sm font-medium text-gray-900">{t('about.mission.values.fastDelivery')}</div>
                      </div>
                      <div className="space-y-2">
                        <Icon icon="fluent:shield-checkmark-24-filled" className="w-8 h-8 text-green-500" />
                        <div className="text-sm font-medium text-gray-900">{t('about.mission.values.qualityCode')}</div>
                      </div>
                      <div className="space-y-2">
                        <Icon icon="fluent:handshake-24-filled" className="w-8 h-8 text-orange-500" />
                        <div className="text-sm font-medium text-gray-900">{t('about.mission.values.longTermSupport')}</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* What We Do - Bento Grid Style */}
        <div className="bg-gray-50 px-6 py-24">
          <div className="text-center mb-16">
            <h2 className="text-5xl font-semibold text-gray-900 mb-4">{t('about.whatWeDo.title')}</h2>
            <p className="text-xl text-gray-600">{t('about.whatWeDo.subtitle')}</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {[
              {
                number: '01',
                title: t('about.whatWeDo.services.excelPlatform.title'),
                description: t('about.whatWeDo.services.excelPlatform.description'),
                icon: 'fluent:database-arrow-right-24-filled',
                numberColor: 'text-blue-100',
                iconColor: 'text-blue-500',
                dotColor: 'bg-blue-500',
                features: [
                  t('about.whatWeDo.services.excelPlatform.features.migration'),
                  t('about.whatWeDo.services.excelPlatform.features.dashboards'),
                  t('about.whatWeDo.services.excelPlatform.features.realtime'),
                  t('about.whatWeDo.services.excelPlatform.features.roles')
                ]
              },
              {
                number: '02',
                title: t('about.whatWeDo.services.educational.title'),
                description: t('about.whatWeDo.services.educational.description'),
                icon: 'fluent:book-open-globe-24-filled',
                numberColor: 'text-purple-100',
                iconColor: 'text-purple-500',
                dotColor: 'bg-purple-500',
                features: [
                  t('about.whatWeDo.services.educational.features.portals'),
                  t('about.whatWeDo.services.educational.features.courses'),
                  t('about.whatWeDo.services.educational.features.grades'),
                  t('about.whatWeDo.services.educational.features.enrollment')
                ]
              },
              {
                number: '03',
                title: t('about.whatWeDo.services.business.title'),
                description: t('about.whatWeDo.services.business.description'),
                icon: 'fluent:globe-search-24-filled',
                numberColor: 'text-green-100',
                iconColor: 'text-green-500',
                dotColor: 'bg-green-500',
                features: [
                  t('about.whatWeDo.services.business.features.design'),
                  t('about.whatWeDo.services.business.features.mobile'),
                  t('about.whatWeDo.services.business.features.seo'),
                  t('about.whatWeDo.services.business.features.updates')
                ]
              }
            ].map((service, index) => (
              <div key={index} className="group bg-white p-8 hover:shadow-2xl transition-all duration-300 border-t-4 border-transparent hover:border-gray-900 rounded-2xl">
                <div className="space-y-6">
                  <div className="flex items-start justify-between">
                    <div className={`text-6xl font-semibold ${service.numberColor}`}>{service.number}</div>
                    <Icon icon={service.icon} className={`w-12 h-12 ${service.iconColor}`} />
                  </div>
                  <div>
                    <h3 className="text-2xl font-semibold text-gray-900 mb-2">{service.title}</h3>
                    <p className="text-gray-600">{service.description}</p>
                  </div>
                  <div className="space-y-2">
                    {service.features.map((feature, i) => (
                      <div key={i} className="flex items-center gap-2 text-sm text-gray-700">
                        <div className={`w-1.5 h-1.5 ${service.dotColor} rounded-full`}></div>
                        {feature}
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Our Approach */}
        <div className="px-6 py-24 bg-white">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <div className="text-sm font-medium text-blue-600 uppercase tracking-widest mb-4">{t('about.approach.badge')}</div>
              <h2 className="text-5xl font-semibold text-gray-900 mb-8 leading-tight">
                {t('about.approach.title')}
              </h2>
              <p className="text-xl text-gray-600 leading-relaxed max-w-3xl mx-auto">
                {t('about.approach.description')}
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {[
                {
                  icon: 'fluent-color:people-chat-24',
                  title: t('about.approach.items.personal.title'),
                  description: t('about.approach.items.personal.description'),
                  iconColor: 'text-blue-500'
                },
                {
                  icon: 'fluent:timer-24-filled',
                  title: t('about.approach.items.attention.title'),
                  description: t('about.approach.items.attention.description'),
                  iconColor: 'text-purple-500'
                },
                {
                  icon: 'fluent:learning-app-24-filled',
                  title: t('about.approach.items.training.title'),
                  description: t('about.approach.items.training.description'),
                  iconColor: 'text-green-500'
                },
                {
                  icon: 'fluent:phone-chat-24-filled',
                  title: t('about.approach.items.available.title'),
                  description: t('about.approach.items.available.description'),
                  iconColor: 'text-orange-500'
                }
              ].map((item, index) => (
                <div key={index} className="text-center p-6 bg-gray-50 hover:bg-gray-100 transition-colors rounded-2xl">
                  <Icon icon={item.icon} className={`w-12 h-12 ${item.iconColor} mx-auto mb-4`} />
                  <h3 className="text-lg font-medium text-gray-900 mb-2">{item.title}</h3>
                  <p className="text-sm text-gray-600">{item.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Why Choose Us - Split Layout */}
        <div className="grid lg:grid-cols-2">
          {/* Left - Black */}
          <div className="bg-gray-900 text-white p-12 lg:p-20">
            <h2 className="text-4xl font-semibold mb-12">{t('about.whyChooseUs.title')}</h2>
            <div className="space-y-8">
              {[
                {
                  title: t('about.whyChooseUs.items.language.title'),
                  description: t('about.whyChooseUs.items.language.description'),
                  icon: 'fluent:chat-bubbles-question-24-filled'
                },
                {
                  title: t('about.whyChooseUs.items.affordable.title'),
                  description: t('about.whyChooseUs.items.affordable.description'),
                  icon: 'fluent:money-hand-24-filled'
                },
                {
                  title: t('about.whyChooseUs.items.fast.title'),
                  description: t('about.whyChooseUs.items.fast.description'),
                  icon: 'fluent:top-speed-24-filled'
                },
                {
                  title: t('about.whyChooseUs.items.support.title'),
                  description: t('about.whyChooseUs.items.support.description'),
                  icon: 'fluent:headset-24-filled'
                }
              ].map((item, index) => (
                <div key={index} className="flex gap-4">
                  <Icon icon={item.icon} className="w-8 h-8 text-blue-400 flex-shrink-0" />
                  <div>
                    <h3 className="text-xl font-medium mb-2">{item.title}</h3>
                    <p className="text-gray-400 leading-relaxed">{item.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right - Creative Badge Design */}
          <div className="bg-white p-12 lg:p-20 flex items-center justify-center relative overflow-hidden">
            {/* Decorative background elements */}
            <div className="absolute top-0 left-0 w-40 h-40 bg-blue-100 rounded-full -translate-x-1/2 -translate-y-1/2"></div>
            <div className="absolute bottom-0 right-0 w-60 h-60 bg-purple-100 rounded-full translate-x-1/3 translate-y-1/3"></div>

            <div className="relative z-10 w-full max-w-md">
              {/* Large Badge/Stamp Design */}
              <div className="relative">
                {/* Main circular badge */}
                <div className="w-64 h-64 mx-auto relative">
                  {/* Outer decorative circle */}
                  <div className="absolute inset-0 border-8 border-gray-900 rounded-full"></div>
                  <div className="absolute inset-4 border-4 border-dashed border-gray-300 rounded-full"></div>

                  {/* Inner content */}
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="text-center">
                      <Icon icon="fluent:shield-checkmark-24-filled" className="w-20 h-20 text-blue-500 mx-auto mb-3" />
                      <div className="text-2xl font-semibold text-gray-900">{t('about.whyChooseUs.badge.quality')}</div>
                      <div className="text-sm font-medium text-gray-600">{t('about.whyChooseUs.badge.guaranteed')}</div>
                    </div>
                  </div>
                </div>

                {/* Side text decorations */}
                <div className="absolute -left-8 top-1/2 -translate-y-1/2 -rotate-90">
                  <div className="text-xs font-medium text-gray-400 uppercase tracking-widest">{t('about.whyChooseUs.badge.builtWithCare')}</div>
                </div>
                <div className="absolute -right-8 top-1/2 -translate-y-1/2 rotate-90">
                  <div className="text-xs font-medium text-gray-400 uppercase tracking-widest">{t('about.whyChooseUs.badge.since')}</div>
                </div>
              </div>

              {/* Features Grid */}
              <div className="mt-12 grid grid-cols-3 gap-4 text-center">
                {[
                  { icon: 'fluent:code-24-filled', label: t('about.whyChooseUs.badge.cleanCode'), iconColor: 'text-blue-500' },
                  { icon: 'fluent:design-ideas-24-filled', label: t('about.whyChooseUs.badge.modern'), iconColor: 'text-purple-500' },
                  { icon: 'fluent:shield-24-filled', label: t('about.whyChooseUs.badge.secure'), iconColor: 'text-green-500' }
                ].map((item, index) => (
                  <div key={index} className="p-4 bg-gray-50 hover:bg-gray-100 transition-colors rounded-xl">
                    <Icon icon={item.icon} className={`w-8 h-8 ${item.iconColor} mx-auto mb-2`} />
                    <div className="text-xs font-medium text-gray-900">{item.label}</div>
                  </div>
                ))}
              </div>

              {/* Bottom tagline */}
              <div className="mt-8 text-center">
                <p className="text-sm text-gray-600 italic">
                  "{t('about.whyChooseUs.badge.quote')}"
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* CTA - Full Width */}
        <div className="bg-white px-6 py-24">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl lg:text-[48px] font-semibold text-gray-900 mb-6 leading-tight">
              {t('about.cta.title')}
            </h2>
            <p className="text-xl text-gray-600 mb-12 max-w-2xl mx-auto">
              {t('about.cta.description')}
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="/contact"
                className="px-10 py-4 bg-brand-black text-white text-sm font-semibold rounded-full hover:bg-brand-black/90 transition-all shadow-lg hover:shadow-xl inline-flex items-center justify-center gap-2 group"
              >
                {t('about.cta.startProject')}
                <Icon icon="fluent:arrow-right-24-filled" className="w-5 h-5 transition-transform duration-300 group-hover:translate-x-1" />
              </a>
              <a
                href="#"
                className="px-10 py-4 border border-brand-black text-brand-black text-sm font-semibold rounded-full hover:bg-brand-black hover:text-white transition-all inline-flex items-center justify-center gap-2 group"
              >
                {t('about.cta.viewWork')}
                <Icon icon="fluent:arrow-right-24-filled" className="w-5 h-5 transition-transform duration-300 group-hover:translate-x-1" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
